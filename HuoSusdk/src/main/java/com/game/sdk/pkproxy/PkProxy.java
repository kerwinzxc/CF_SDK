package com.game.sdk.pkproxy;

import android.text.TextUtils;

import com.game.sdk.domain.LoginRequestBean;
import com.game.sdk.domain.LoginResultBean;
import com.game.sdk.domain.Notice;
import com.game.sdk.domain.pk.PkLoginRequestBean;
import com.game.sdk.domain.pk.PkLoginResultBean;
import com.game.sdk.domain.pk.PkUserInfo;
import com.game.sdk.http.HttpCallbackDecode;
import com.game.sdk.http.HttpCallbackNoSignDecode;
import com.game.sdk.util.GsonUtil;
import com.kymjs.rxvolley.RxVolley;
import com.kymjs.rxvolley.client.HttpParams;
import com.kymjs.rxvolley.toolbox.HttpParamsEntry;

import java.util.ArrayList;
import java.util.List;

public class PkProxy {

    private static HttpParamsEntry JSON_CONTENT_TYPE = new HttpParamsEntry("Content-Type", "application/json", true);
    private static HttpParamsEntry AUTHORIZATION_LOGIN = new HttpParamsEntry("Authorization", "Basic d2ViY2xpZW50Og==", true);

    public static void postLogin(final LoginRequestBean loginRequestBean, final HttpCallbackDecode<LoginResultBean> resultCallback) {

        final PkLoginRequestBean pkLoginRequestBean = new PkLoginRequestBean();
        pkLoginRequestBean.setUsername(loginRequestBean.getUsername());
        pkLoginRequestBean.setPassword(loginRequestBean.getPassword());

        HttpParams httpParams = new HttpParams();
        httpParams.putHeaders(JSON_CONTENT_TYPE.k, JSON_CONTENT_TYPE.v);
        httpParams.putHeaders(AUTHORIZATION_LOGIN.k, AUTHORIZATION_LOGIN.v);
        httpParams.putJsonParams(GsonUtil.getGson().toJson(pkLoginRequestBean));

        RxVolley.post("https://virtserver.swaggerhub.com/sandbx-team/GEC/1.0.0/security/oauth/token/",
                httpParams,
                new HttpCallbackNoSignDecode<PkLoginResultBean>(resultCallback.getActivity(), resultCallback.getAuthkey()) {
                    @Override
                    public void onDataSuccess(final PkLoginResultBean pkLoginResultBean) {
                        postUser(pkLoginResultBean.getAccess_token(), new HttpCallbackNoSignDecode<PkUserInfo>(resultCallback.getActivity(), resultCallback.getAuthkey()) {
                            @Override
                            public void onDataSuccess(PkUserInfo pkUserInfo) {
                                LoginResultBean loginResultBean = new LoginResultBean();
                                loginResultBean.setMem_id(pkUserInfo.getId() + "");
                                loginResultBean.setCp_user_token(pkLoginResultBean.getAccess_token());
                                loginResultBean.setAgentgame(pkUserInfo.getKingdom());
                                LoginResultBean.UserName userName = new LoginResultBean.UserName(loginRequestBean.getUsername());
                                List<LoginResultBean.UserName> userNameList = new ArrayList<>();
                                userNameList.add(userName);
                                loginResultBean.setUserlist(userNameList);
                                //TODO: NOTICE fields, what is usage of those notice and what is the format of time.
                                loginResultBean.setNotice(new Notice("mockTitle", "mockContent", "mockTime"));
                                resultCallback.onDataSuccess(loginResultBean);
                            }
                        });

                    }
                });
    }


    private static void postUser(String accessToken, HttpCallbackNoSignDecode<PkUserInfo> resultCallback) {
        if (TextUtils.isEmpty(accessToken)) {
            throw new IllegalArgumentException();
        }
        HttpParamsEntry authorization = new HttpParamsEntry("Authorization", "Basic " + accessToken, true);
        HttpParams httpParams = new HttpParams();
        httpParams.putHeaders(JSON_CONTENT_TYPE.k, JSON_CONTENT_TYPE.v);
        httpParams.putHeaders(authorization.k, authorization.v);

        RxVolley.get("https://virtserver.swaggerhub.com/sandbx-team/GEC/1.0.0/api/user", resultCallback);
    }
}

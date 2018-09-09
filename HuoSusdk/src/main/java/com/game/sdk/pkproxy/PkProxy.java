package com.game.sdk.pkproxy;

import android.text.TextUtils;
import android.util.Log;

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

    private static final String TAG = PkProxy.class.getSimpleName();

    private static HttpParamsEntry AUTHORIZATION_LOGIN = new HttpParamsEntry("Authorization", "Basic d2ViY2xpZW50Og==", false);

    public static void postLogin(final LoginRequestBean loginRequestBean, final HttpCallbackDecode<LoginResultBean> resultCallback) {

        final PkLoginRequestBean pkLoginRequestBean = new PkLoginRequestBean();
        pkLoginRequestBean.setUsername(loginRequestBean.getUsername());
        pkLoginRequestBean.setPassword(loginRequestBean.getPassword());

        HttpParams httpParams = new HttpParams();
        httpParams.putHeaders(AUTHORIZATION_LOGIN.k, AUTHORIZATION_LOGIN.v);
        httpParams.put("username", loginRequestBean.getUsername());
        httpParams.put("password", loginRequestBean.getPassword());
        httpParams.put("grant_type", "password");

        RxVolley.post("https://playground.dobby.sandbx.co/security/oauth/token",
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
        httpParams.putHeaders(authorization.k, authorization.v);

        RxVolley.get("https://playground.dobby.sandbx.co/api/user", resultCallback);
    }
}

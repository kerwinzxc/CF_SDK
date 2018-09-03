package com.game.sdk.http;

import android.content.Context;
import android.util.Log;

import com.game.sdk.domain.NotProguard;
import com.game.sdk.log.L;
import com.google.gson.Gson;

/**
 * Created by liu hong liang on 2016/11/9.
 */
@NotProguard
public abstract class HttpCallbackNoSignDecode<E> extends HttpCallbackDecode<E> {
    private static final String TAG = HttpCallbackNoSignDecode.class.getSimpleName();

    public HttpCallbackNoSignDecode(Context activity, String authkey) {
        super(activity, authkey);
    }

    @Override
    public final void onSuccess(String t) {
        Log.d(TAG, "http_result=" + t);
        try {
            E dataObject = new Gson().fromJson(t, getTClass());
            onDataSuccess(dataObject);
            L.d(TAG, "签名验证通过");
        } catch (Exception e) {
            e.printStackTrace();
            onFailure("-1", "服务器忙，请稍后再试 I am inside onSuccess!");
        }
    }
}

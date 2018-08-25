package com.game.sdk.http;

import android.util.Base64;

import com.game.sdk.SdkConstant;
import com.game.sdk.domain.NotProguard;
import com.game.sdk.log.L;
import com.game.sdk.util.AuthCodeUtil;
import com.game.sdk.util.RSAUtils;
import com.kymjs.rxvolley.client.HttpParams;
import com.kymjs.rxvolley.toolbox.HttpParamsEntry;

import java.util.ArrayList;
import java.util.Random;
import java.util.*;
import java.net.URL;
import java.io.*;
import java.net.*;


/**
 * Created by liu hong liang on 2016/11/9.
 */

public class HttpParamsBuild {

    private static final String TAG = HttpParamsBuild.class.getSimpleName();
    private static String randChDict="qwertyuiopasdfghjklzxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM";
    private String jsonParam="";
    private String authkey;
    private final ArrayList<HttpParamsEntry> mHeaders = new ArrayList<>(4);
    private HttpParams httpParams;
    public HttpParamsBuild(String jsonParam) {
        this.jsonParam = jsonParam;
        //encodeDataPW();
        encodeData();
    }

    //Powerkingdom's data format
    private void encodeDataPK() {

        String code =  SdkConstant.HS_CODE;
        String userpassword = "stormthrone-en:stormthrone-en-6589$X";
        String encodedAuthorization = Base64.encodeToString( userpassword.getBytes(), 1 );
        System.out.println("EncodedAuthorization : "+encodedAuthorization);
        //conn.setRequestProperty("Authorization", "Basic "+encodedAuthorization);

        //System.out.println("validation1 : ");

        Map<String,Object> params = new LinkedHashMap<>();
        params.put("grant_type", "authorization_code");
        params.put("client_id", "stormthrone-en");
        params.put("redirect_uri", "http://stormeng.galaxyfungame.com/list1.html");
        params.put("code", code); // some example code

        try {
            //System.out.println("validation2 ");
            StringBuilder postData = new StringBuilder();
            for (Map.Entry<String, Object> param : params.entrySet()) {
                if (postData.length() != 0) postData.append('&');
                postData.append(URLEncoder.encode(param.getKey(), "UTF-8"));
                postData.append('=');
                postData.append(URLEncoder.encode(String.valueOf(param.getValue()), "UTF-8"));
            }
        }catch(Exception ex) {
            ex.printStackTrace();
        }
    }

    private void encodeData() {
        httpParams=new HttpParams();
        String randCh = getRandCh(16);
        //生成key
//        client_id 与 时间戳 与 rand16 使用下划线(_)连接，得到 rsakey
        long time=System.currentTimeMillis()+ SdkConstant.SERVER_TIME_INTERVAL;
        StringBuffer keyBuffer=new StringBuffer(SdkConstant.HS_CLIENTID).append("_")
                .append(time).append("_").append(randCh);
        L.e(TAG,"key加密前："+keyBuffer);
        String key=null;
        try {
            key= new String(RSAUtils.encryptByPublicKey(keyBuffer.toString().getBytes(), SdkConstant.RSA_PUBLIC_KEY), "utf-8");
            L.e(TAG,"key公钥加密后："+key);
            //生成key
            httpParams.put("key",key);
        } catch (Exception e) {
            e.printStackTrace();
        }
        //生成加密数据
//        6、2中的rand16与client_key组成对称加密参数 authkey ([client_key]_rand16)
//        7、将requestdata与 authkey 对称加密并 URLencoding 得到请求参数  `data`
        StringBuffer dataKeyBuffer=new StringBuffer(SdkConstant.HS_CLIENTKEY).append(randCh);
        this.authkey=dataKeyBuffer.toString();
        L.e(TAG,"data加密前1："+jsonParam);
        String data = AuthCodeUtil.authcodeEncode(jsonParam, authkey);
        L.e(TAG,"key:"+key+"\ndata:"+data);
        httpParams.put("data",data);
        for(HttpParamsEntry httpParamsEntry:mHeaders){
            httpParams.putHeaders(httpParamsEntry.k,httpParamsEntry.v);
        }
    }

    @NotProguard
    public HttpParams getHttpParams(){
        return httpParams;
    }

    @NotProguard
    public String getAuthkey() {
        return authkey;
    }
    /**
     * 随机从randChDict字典里获取length长度的字符串
     * @param length
     * @return
     */
    @NotProguard
    public static String getRandCh(int length){
        int dictLength = randChDict.length();
        Random random=new Random();
        StringBuffer buffer=new StringBuffer();
        for(int i=0;i<length;i++){
            buffer.append(randChDict.charAt(random.nextInt(dictLength)));
        }
        return buffer.toString();
    }
}

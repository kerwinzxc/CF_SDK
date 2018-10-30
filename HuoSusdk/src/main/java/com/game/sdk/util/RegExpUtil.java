package com.game.sdk.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by liu hong liang on 2016/11/14.
 */

public class RegExpUtil {

    public static boolean isMatchAccount(String data){
        return true;
    }
    public static boolean isMatchPassword(String data){
        return true;
    }
    /**
     * 判断是否是手机号码
     *
     * @param mobiles
     * @return
     */
    public static boolean isMobileNumber(String mobiles) {
        Pattern p = Pattern.compile("^((1[0-9][0-9]))\\d{8}$");
        Matcher m = p.matcher(mobiles);
        return m.matches();
    }
}

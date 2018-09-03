package com.game.sdk.domain.pk;

import com.game.sdk.domain.BaseRequestBean;

public class PkLoginRequestBean extends BaseRequestBean {
    private String username;//是	STRING	用户名，注册用户名
    private String password;//是	STRING	密码，注册密码
    private String grant_type = "password";


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGrant_type() {
        return grant_type;
    }
}

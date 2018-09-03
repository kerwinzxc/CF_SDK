package com.game.sdk.domain.pk;

public class PkUserInfo {
    private int id;
    private String loginEmail;
    private String nickName;
    private String dateOfBirth;
    private String kingdom;
    private String lang;
    private String state;
    private String referralLink;
    private PkIntroducerInfo introducer;
    private PkProfilePictures profilePictures;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLoginEmail() {
        return loginEmail;
    }

    public void setLoginEmail(String loginEmail) {
        this.loginEmail = loginEmail;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getKingdom() {
        return kingdom;
    }

    public void setKingdom(String kingdom) {
        this.kingdom = kingdom;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getReferralLink() {
        return referralLink;
    }

    public void setReferralLink(String referralLink) {
        this.referralLink = referralLink;
    }

    public PkIntroducerInfo getIntroducer() {
        return introducer;
    }

    public void setIntroducer(PkIntroducerInfo introducer) {
        this.introducer = introducer;
    }

    public PkProfilePictures getProfilePictures() {
        return profilePictures;
    }

    public void setProfilePictures(PkProfilePictures profilePictures) {
        this.profilePictures = profilePictures;
    }
}

# Facebook Unofficial API

**Available Languages**: [🇺🇸](https://cy4u.dev/Facebook-Unofficial-API/ "English") [🇹🇷](https://cy4u.dev/Facebook-Unofficial-API/tr "Turkish")

[**Facebook**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook") is one of the world's most popular social media platforms with billions of users.

For businesses, brands and individuals, **Facebook** offers opportunities to reach large audiences, increase brand awareness and engage with target audiences. However, driving and managing these interactions can sometimes be complex.

This is where the new [**Unofficial Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Unofficial Facebook API") we developed with **TypeScript** comes in.

This library makes it easier to manage your interactions on **Facebook** and allows businesses or developers to operate more effectively on the Facebook platform.

## Introduction to Facebook Library 

This library is written in **TypeScript** for **Node.JS** and allows you to perform various operations using the [**Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook API"). Here are some of the features this library provides:

- **Login**: Users can easily log in to their Facebook account using the library. This simplifies the login process and provides a faster start.

- **Page Like**: Businesses or users can use this function to grow their pages and attract more followers. Page liking can be done with a single function call..

- **Post Like**: Users can like other users statuses. This is an effective way to increase engagement and build connections between users.

- **Commenting on a post**: Businesses or individuals can enable users to comment on the posts they publish. This is a way to get more engagement and make the content reach a wider audience.

This library allows you to effectively operate on the **Facebook** platform using the power of **Node.js**. It is also easy to use and reduces the complexity required to manage [**Facebook Unofficial API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook Unofficial API") calls.

### Getting Started

To start the development process, make sure you have **Node.js** installed on your system. You can download it from the official **Node.js website** or use a package manager like **npm** (**Node Package Manager**) to install it.

#### Installation

```
$ npm i facebook-unofficial-api
$ bun i facebook-unofficial-api
$ pnpm i facebook-unofficial-api
```

#### How to import

```js
const { Facebook } = require('facebook-unofficial-api');
```


#### Login with Facebook

```js
async function loginRequest() {
 const facebookInstance = new Facebook();
 const Username = 'Your Facebook Mail or Username';
 const Password = 'Your Facebook Password';

// If you want to use a proxy -> facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.loginRequest(Username, Password).then((response) => {
console.log(response);
}).catch((err) => {
console.log(err);
});
} loginRequest()
```

#### Pull User Information

```js
async function checkUserDetails(){
const UUID = 'Facebook UUID -> You can get it from the login process';
const Token = 'Facebook Token -> You can get it from the login process';

// If you want to use a proxy -> facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.checkUserDetails(UUID,Token).then((response) => {
console.log(response);
}).catch((err) => {
console.log(err);
})
}checkUserDetails()
```

#### Post & Page Like

```js
const Token = 'Facebook Token -> You can get it from the login process';
const postID = 'pfbid027yBu3CAGH1f1mUPom2peRFdDpfWWZJaQy5obBojJobc4dYhuyY144maebMVnRCsBl';

// If you want to use a proxy -> facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.sendLike(postID, Token).then((response) => {
console.log(response);
}).catch((err) => {
console.log(err);
});
```

#### Send Comment

```js
const Token = 'Facebook Token -> You can get it from the login process';
const postID = 'pfbid027yBu3CAGH1f1mUPom2peRFdDpfWWZJaQy5obBojJobc4dYhuyY144maebMVnRCsBl';
const Message = 'Comment';

// If you want to use a proxy -> facebookInstance.fProxy = 'http://proxy_username:proxy_password@proxy_ip:proxy_port'

facebookInstance.sendComment(postID, Token, Message).then((result) => {
console.log(result);
}).catch((err) => {
console.log(err);
});
```

#### Keywords

[**Facebook**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook"), [**Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook API"), [**Facebook Unofficial API**](https://cy4u.dev/Facebook-Unofficial-API/ "Facebook Unofficial API"), [**Unofficial Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/ "Unofficial Facebook API"), [**facebook api for developers**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api for developers"), [**facebook api meaning**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api meaning"), [**facebook api hide comment**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api hide comment"), [**facebook api get user info**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api get user info"), [**facebook api configuration**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api configuration"), [**facebook api instagram insights**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api instagram insights"), [**facebook api delete post**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api delete post"), [**facebook api app**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api app"), [**facebook jobs api**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook jobs api"), [**facebook api graph explorer**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api graph explorer"), [**facebook api error code 100**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api error code 100"), [**facebook api block user**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api block user"), [**facebook api for whatsapp**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api for whatsapp"), [**facebook api changes**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api changes"), [**facebook api integration**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api integration"), [**facebook api down**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api down"), [**facebook api access token**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api access token"), [**facebook api java**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api java"), [**facebook api error codes**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api error codes"), [**facebook api an unknown error occurred**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api an unknown error occurred"), [**facebook api key**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api key"), [**facebook api get posts**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api get posts"), [**facebook api free**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api free"), [**facebook api breakdowns**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api breakdowns"), [**facebook api health check**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api health check"), [**facebook api for research**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api for research"), [**facebook api javascript**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api javascript"), [**facebook api typescript**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api typescript"), [**facebook api nodejs**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api nodejs"), [**facebook api instagram_business_account**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api instagram_business_account"), [**facebook api data**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api data"), [**facebook api adset**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api adset"), [**facebook api javascript example**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api javascript example"), [**facebook api typescript example**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api typescript example"), [**facebook api nodejs example**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api nodejs example"), [**facebook api get comments from post**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api get comments from post"), [**facebook api example**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api example"), [**facebook api business_management**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api business_management"), [**facebook api for groups**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api for groups"), [**facebook api changelog**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api changelog"), [**api facebook help**](https://cy4u.dev/Facebook-Unofficial-API/ "api facebook help"), [**facebook api developer**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api developer"), [**facebook api explorer**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api explorer"), [**facebook api ad account**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api ad account"), [**facebook post api javascript**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook post api javascript"), [**facebook post api typescript**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook post api typescript"), [**facebook post api nodejs**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook post api nodejs"), [**facebook api events list**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api events list"), [**facebook api bubble**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api bubble"), [**facebook api health status**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api health status"), [**facebook api fields**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api fields"), [**facebook api create post**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api create post"), [**facebook api id**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api id"), [**facebook api date_preset**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api date_preset"), [**facebook api accounts**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api accounts"), [**facebook api java library**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api java library"), [**facebook api key create**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api key create"), [**facebook api get group posts**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api get group posts"), [**facebook api error**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api error"), [**facebook api bugs**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api bugs"), [**facebook api feed**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api feed"), [**facebook api conversions**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api conversions"), [**facebook api header**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api header"), [**facebook api graph**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api graph"), [**facebook api documentation**](https://cy4u.dev/Facebook-Unofficial-API/ ""facebook api documentation), [**facebook api insights metrics**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api insights metrics"), [**facebook api download video**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api download video"), [**facebook api access token expiration**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api access token expiration"), [**facebook share api javascript**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook share api javascript"), [**facebook share api typescript**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook share api typescript"), [**facebook share api nodejs**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook share api nodejs"), [**facebook api enroll_status**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api enroll_status"), [**facebook api bot**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api bot"), [**facebook api hashtag search**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api hashtag search"), [**facebook api friends list**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api friends list"), [**facebook api campaign**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api campaign"), [**facebook api issues**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api issues"), [**facebook api debugger**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api debugger"), [**facebook api authentication**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api authentication"), [**facebook api json**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api json"), [**facebook api github**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api github"), [**facebook api endpoints**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api endpoints"), [**facebook api batch request**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api batch request"), [**facebook api key and secret**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api key and secret"), [**facebook api for posts**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api for posts"), [**facebook api cost**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api cost"), [**facebook api html**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api html"), [**facebook api get posts from page**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api get posts from page"), [**facebook api create event**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api create event"), [**facebook api instagram**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api instagram"), [**facebook api download**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api download"), [**facebook api ad creative**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api ad creative"), [**facebook javascript api tutorial**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook javascript api tutorial"), [**facebook typescript api tutorial**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook typescript api tutorial"), [**facebook nodejs api tutorial**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook nodejs api tutorial"), [**facebook api birthdays**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api birthdays"), [**facebook api generate access token**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api generate access token"), [**facebook api error_subcode 33**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api error_subcode 33"), [**facebook api for ads**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api for ads"), [**facebook api comments**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api comments"), [**facebook api insights**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api insights"), [**facebook api deprecation**](https://cy4u.dev/Facebook-Unofficial-API/ ""), [**facebook api ads**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api ads"), [**facebook api events**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api events"), [**facebook api business_management permission**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api business_management permission"), [**facebook api key for facebook login**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api key for facebook login"), [**facebook api get pages list**](https://cy4u.dev/Facebook-Unofficial-API/ "facebook api get pages list"), [**NodeJS Developer**](https://cy4u.dev "NodeJS Developer"), [**Back-end Developer**](https://cy4u.dev "Back-end Developer"), [**Node.JS Developer**](https://cy4u.dev "Node.JS Developer"), [**Backend Developer**](https://cy4u.dev "Backend Developer")

#### Sponsor & Donate

[Github](https://github.com/sponsors/cy4udev "cy4udev github") | [Patreon](https://patreon.com/cy4udev "cy4udev patreon") | [BuyMeaCoffee](https://www.buymeacoffee.com/cy4udev "cy4udev BuyMeaCoffee")

#### Copyright & Other Issues

Copyright: [copyright@cy4u.dev](mailto:copyright@cy4u.dev "copyright@cy4u.dev") | Other Issues: [hello@cy4u.dev](mailto:hello@cy4u.dev "hello@cy4u.dev")

#### Social Media

[Linkedin](https://www.linkedin.com/company/cy4udev/ "cy4udev linkedin") | [Twitter](https://twitter.com/cy4udev "cy4udev twitter") | [Bluesky](https://bsky.app/profile/cy4u.dev "cy4udev bluesky") | [Instagram](https://instagram.com/cy4udev "cy4udev instagram") | [Youtube](https://www.youtube.com/@cy4udev "cy4udev youtube") | [Telegram](https://t.me/cy4udev "cy4udev telegram") | [Github](https://github.com/cy4udev "cy4udev github") | [Npmjs](https://www.npmjs.com/~cy4udev "cy4udev npmjs")

#### License

[**Can Yesilyurt**](https://canyesilyurt.com "Can Yesilyurt") | [**cy4udev**](https://cy4u.dev "cy4udev")

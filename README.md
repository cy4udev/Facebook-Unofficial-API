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

#### Post & Page Like

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

#### Send Comment

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

[**Facebook**](https://cy4u.dev/Facebook-Unofficial-API/tr "Facebook"), [**Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/tr "Facebook API"), [**Facebook Unofficial API**](https://cy4u.dev/Facebook-Unofficial-API/tr "Facebook Unofficial API"), [**Unofficial Facebook API**](https://cy4u.dev/Facebook-Unofficial-API/tr "Unofficial Facebook API"), [**NodeJS Developer**](https://cy4u.dev "NodeJS Developer"), [**Back-end Developer**](https://cy4u.dev "Back-end Developer"), [**Node.JS Developer**](https://cy4u.dev "Node.JS Developer"), [**Backend Developer**](https://cy4u.dev "Backend Developer")

#### Sponsor & Donate

[Patreon](https://patreon.com/cy4udev "cy4udev patreon") | [BuyMeaCoffee](https://www.buymeacoffee.com/cy4udev "cy4udev BuyMeaCoffee")

#### Copyright & Other Issues

Copyright: [copyright@cy4u.dev](mailto:copyright@cy4u.dev "copyright@cy4u.dev") | Other Issues: [hello@cy4u.dev](mailto:hello@cy4u.dev "hello@cy4u.dev")

#### Social Media

[Linkedin](https://www.linkedin.com/company/cy4udev/ "cy4udev linkedin") | [Twitter](https://twitter.com/cy4udev "cy4udev twitter") | [Bluesky](https://bsky.app/profile/cy4u.dev "cy4udev bluesky") | [Instagram](https://instagram.com/cy4udev "cy4udev instagram") | [Youtube](https://www.youtube.com/@cy4udev "cy4udev youtube") | [Github](https://github.com/cy4udev "cy4udev github") | [Npmjs](https://www.npmjs.com/~cy4udev "cy4udev npmjs")

#### License

[**Can Yesilyurt**](https://canyesilyurt.com "Can Yesilyurt") | [**cy4udev**](https://cy4u.dev "cy4udev")
# ProjectAlice

currently available at https://docs.projectalice.io


# Building locally
This wiki is build using vuepress. When you want to test it locally build it with
```
vuepress build docs
```
and then serve the website locally e.g. with [`http-server`](https://www.npmjs.com/package/http-server)


Make sure *not to use the development server* that is build in to vuepress
```
vuepress dev .
```
Since we are using github pages we have to set the Content Security Policy via meta tags.
The development server violates this Content Security Policy, so using it you will not see the wiki.

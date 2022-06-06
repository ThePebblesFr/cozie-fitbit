"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[733],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2348:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"gs-sending-data-to-cloud",title:"Sending data to the cloud",sidebar_label:"Sending data to the cloud"},d=void 0,l={unversionedId:"gs-sending-data-to-cloud",id:"gs-sending-data-to-cloud",title:"Sending data to the cloud",description:"We are sending the data from the Cozie application to our cloud database using an AWS Lambda function.",source:"@site/docs/gs-SendingDataToCloud.md",sourceDirName:".",slug:"/gs-sending-data-to-cloud",permalink:"/docs/gs-sending-data-to-cloud",draft:!1,editUrl:"https://github.com/ThePebblesFr/cozie-website/tree/master/my-website/docs/gs-SendingDataToCloud.md",tags:[],version:"current",frontMatter:{id:"gs-sending-data-to-cloud",title:"Sending data to the cloud",sidebar_label:"Sending data to the cloud"},sidebar:"tutorialSidebar",previous:{title:"Switching between screens",permalink:"/docs/switching-between-screens"},next:{title:"Introduction",permalink:"/docs/intro-generate-cozie"}},u={},c=[],p={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/PkTSNwP12TI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",null,"We are sending the data from the Cozie application to our cloud database using an ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda function"),".\nThe Lambda function listens for any incoming POST requests, checks that the sender has the right API key,\nprocess the data and send it to our cloud database."),(0,a.kt)("p",null,"We are using AWS Lambda functions, however, valid alternatives are: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions"},"Google Cloud Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodered.org"},"Node-RED"))),(0,a.kt)("p",null,"You can also use any other cloud database out there, and you are not required to use InfluxDB."),(0,a.kt)("p",null,"Please find below the Python code we are currently using in the Lambda function to send the data to our cloud database. Please edit the following line and add your information ",(0,a.kt)("inlineCode",{parentName:"p"},'InfluxDBClient("hostname", 8086, "username",\'password\', "datatbase", ssl=True, verify_ssl=True)'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from __future__ import print_function\nfrom influxdb import InfluxDBClient\nimport json\n\n\ndef lambda_handler(event, context):\n    client = InfluxDBClient("hostname", 8086, "username",\n        \'password\', "datatbase", ssl=True, verify_ssl=True)\n    try:\n\n        print(event["body"])\n\n        body = json.loads(event["body"])\n\n        fields = {}\n\n        for key in body.keys():\n            # Check if the key value is an integer or a float\n            if isinstance(body[key], int) or isinstance(body[key], float):\n                fields[key] = body[key]\n\n        json_body = [{\n            \'time\': body[\'endFeedback\'],\n            \'measurement\': \'fitbitAPI\',\n            \'tags\': {\'userid\': body[\'user_id\'],\n                     \'experimentid\': body[\'experiment_id\']},\n            \'fields\': fields,\n            }]\n\n        client.write_points(json_body)  # write to InfluxDB\n\n        return {\n            "statusCode": 200,\n            "headers": {\n                "Content-Type": "application/json"\n                },\n            "body": "Success"\n            }\n    except Exception as e:\n\n        print(e)\n\n        return {\n            "statusCode": 500,\n            "headers": {\n                "Content-Type": "application/json"\n                },\n            "body": e\n            }\n')))}f.isMDXComponent=!0}}]);
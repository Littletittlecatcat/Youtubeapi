(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),l=a(6),o=a.n(l),s=a(17),m=a(2),u=a(3),d=a(5),v=a(4),p=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.callMeWhenFormSubmitted(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(i.a.Component),h=a(18),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),E=(a(42),function(e){var t=e.video,a=e.onVideoSelected;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),b=function(e){var t=e.videos,a=e.callMeWhenVideoSelected,n=t.map((function(e){return i.a.createElement(E,{key:e.id.videoId,onVideoSelected:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},S=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video-frame",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},N="AIzaSyCqELOgV__N7Ermb6OVUXdnMLm0xntFszE",g=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{q:a,part:"snippet",maxResult:5,key:N}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelected=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("\u5343\u5343")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(p,{callMeWhenFormSubmitted:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"ten wide column"},i.a.createElement(S,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(b,{callMeWhenVideoSelected:this.onVideoSelected,videos:this.state.videos})))))}}]),a}(i.a.Component);c.a.render(i.a.createElement(g,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.04c6d9e9.chunk.js.map
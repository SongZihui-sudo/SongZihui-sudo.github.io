import{aJ as h,z as i,f as c,o as u,g as t,aK as g,ad as d,t as m,i as w,n as a,j as r}from"./modules/vue-CivN7B38.js";import{u as y}from"./slidev/context-CHZsFnoD.js";import{c as T,a as f}from"./layoutHelper-BN7rjZLy.js";import{_ as k}from"./index-DOv5eRLL.js";const x={key:0,class:"slidev-layout default error"},$={key:1},b={class:"flex flex-col h-full w-full"},C={class:"slidev-layout toptitle content w-full"},S={class:"flex flex-row h-full w-full"},V={key:0,class:"h-fit w-full"},I={__name:"top-title-two-cols",props:{columns:{default:"is-one-half"},align:{default:"l-lt-lt"},color:{default:"light"}},setup(v){h(o=>({"95f1aae2":n.value.l,"95f1aad6":n.value.r})),y();const l=v,n=i(()=>T(l.columns)),s=i(()=>{const o=l.align.split("-");return{t:f(o[0]),l:f(o[1]),r:f(o[2])}}),p=i(()=>`neversink-${l.color}-scheme`);return(o,e)=>n.value=="error"||s.value.t=="error"||s.value.l=="error"||s.value.r=="error"?(u(),c("div",x,[e[10]||(e[10]=t("span",{class:"ns-c-warning"},[t("b",null,"Error"),d(": invalid layout params.")],-1)),e[11]||(e[11]=t("hr",null,null,-1)),t("p",null,[e[0]||(e[0]=d(" There are three parameters: ")),e[1]||(e[1]=t("code",null,"columns",-1)),e[2]||(e[2]=d(", ")),e[3]||(e[3]=t("code",null,"align",-1)),e[4]||(e[4]=d(", and ")),e[5]||(e[5]=t("code",null,"color",-1)),e[6]||(e[6]=d(". Currently: ")),t("code",null,"columns: "+m(l.columns),1),e[7]||(e[7]=d(", ")),t("code",null,"align: "+m(l.align),1),e[8]||(e[8]=d(", and ")),t("code",null,"color: "+m(l.color),1),e[9]||(e[9]=d(". "))]),e[12]||(e[12]=g("<p data-v-c83d89d2> The &quot;slots&quot; of the page are default <code data-v-c83d89d2>:: title ::</code>, <code data-v-c83d89d2>:: left ::</code>, and <code data-v-c83d89d2>:: right ::</code></p><p data-v-c83d89d2> Options for <code data-v-c83d89d2>columns</code> are divided into 12 column units. So with <code data-v-c83d89d2>columns: is-1-11</code> the left column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short had of only specifying the left column (<code data-v-c83d89d2>columns: is-1</code> does the same thing). In addition there are short hands like <code data-v-c83d89d2>columns: is-one-quarter</code> which resolves to <code data-v-c83d89d2>is-3-9</code>, etc... </p><p data-v-c83d89d2> The <code data-v-c83d89d2>align</code> parameter determines how the columns look. The notation is for example <code data-v-c83d89d2>align: c-cm-cm</code>. The first part is for the title, the second for the left column, and the third part is for the right column. The first letter is (<code data-v-c83d89d2>c</code> for center, <code data-v-c83d89d2>l</code> for left, <code data-v-c83d89d2>r</code> for right). This applies to all three second. For the columns the second letter is vertical alignment (<code data-v-c83d89d2>t</code> for top, <code data-v-c83d89d2>m</code> for middle, <code data-v-c83d89d2>b</code> for bottom). </p><p data-v-c83d89d2>The <code data-v-c83d89d2>color</code> parameter determines color of the title.</p>",4))])):(u(),c("div",$,[t("div",b,[t("div",{class:a(["w-full h-fit min-h-13 pt-2 pb-2 slidecolor",p.value])},[t("div",{class:a(["slidev-layout toptitle title p-0 ml-6 mr-6 mt-auto mb-auto",s.value.t])},[r(o.$slots,"title",{},void 0,!0)],2)],2),t("div",C,[t("div",S,[t("div",{class:a(["col-left",s.value.l])},[r(o.$slots,"left",{},void 0,!0)],2),t("div",{class:a(["col-right",s.value.r])},[r(o.$slots,"right",{},void 0,!0)],2)])]),o.$slots.default?(u(),c("div",V,[r(o.$slots,"default",{},void 0,!0)])):w("v-if",!0)])]))}},j=k(I,[["__scopeId","data-v-c83d89d2"]]);export{j as I};

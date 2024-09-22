"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[169],{8828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=t(4848),l=t(8453);const o={slug:"numpy-scipy-mkl",title:"Link numpy & scipy against the MKL",authors:"ltalirz",tags:["python","numpy","scipy","mkl"]},s=void 0,a={permalink:"/blog/numpy-scipy-mkl",editUrl:"https://github.com/ltalirz/ltalirz.github.io/edit/master/blog/2016-04-11-numpy-mkl.md",source:"@site/blog/2016-04-11-numpy-mkl.md",title:"Link numpy & scipy against the MKL",description:"The pip package management system is a very convenient way of managing custom python installations that are not managed by the operating system (such as virtual python environments).",date:"2016-04-11T00:00:00.000Z",formattedDate:"April 11, 2016",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"numpy",permalink:"/blog/tags/numpy"},{label:"scipy",permalink:"/blog/tags/scipy"},{label:"mkl",permalink:"/blog/tags/mkl"}],readingTime:1.26,hasTruncateMarker:!0,authors:[{name:"Leopold Talirz",title:"Computational Materials Scientist",url:"https://github.com/ltalirz",imageURL:"https://github.com/ltalirz.png",key:"ltalirz"}],frontMatter:{slug:"numpy-scipy-mkl",title:"Link numpy & scipy against the MKL",authors:"ltalirz",tags:["python","numpy","scipy","mkl"]},unlisted:!1,nextItem:{title:"Importing cube files into Blender",permalink:"/blog/cube-files-blender"}},p={authorsImageUrls:[void 0]},r=[];function c(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The pip package management system is a very convenient way of managing custom python installations that are not managed by the operating system (such as ",(0,i.jsx)(n.a,{href:"https://virtualenv.pypa.io/en/latest/",children:"virtual python environments"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["pip install numpy scipy essentially works out of the box. Yet, when it comes to numpy and scipy, significant speed can be gained by ",(0,i.jsx)(n.a,{href:"https://software.intel.com/en-us/articles/numpyscipy-with-intel-mkl",children:"linking these modules against the Intel Math Kernel Library (MKL)"})," for linear algebra operations."]}),"\n",(0,i.jsx)(n.p,{children:"You can tell pip to do that in the following way:"}),"\n",(0,i.jsx)(n.p,{children:"(1) Tell numpy where to find the MKL"}),"\n",(0,i.jsxs)(n.p,{children:["Create a file ",(0,i.jsx)(n.code,{children:".numpy-site.cfg"})," in your home directory with a content similar to"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[mkl]\nlibrary_dirs = /opt/intel/composer_xe_2013.1.117/mkl/lib/intel64\ninclude_dirs = /opt/intel/composer_xe_2013.1.117/mkl/include\nmkl_libs = mkl_rt\nlapack_libs =\n"})}),"\n",(0,i.jsx)(n.p,{children:"(2) Tell pip to use the Intel compiler"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install numpy \\\n--global-option="config" \\\n--global-option="--compiler=intelem" \\\n--global-option="build_clib" \\\n--global-option="--compiler=intelem" \\\n--global-option="build_ext" \\\n--global-option="--compiler=intelem"\n\npip install scipy \\\n--global-option="config" \\\n--global-option="--compiler=intelem" \\\n--global-option="--fcompiler=intelem" \\\n--global-option="build_clib" \\\n--global-option="--compiler=intelem" \\\n--global-option="--fcompiler=intelem" \\\n--global-option="build_ext" \\\n--global-option="--compiler=intelem" \\\n--global-option="--fcompiler=intelem"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you may also create a file ",(0,i.jsx)(n.code,{children:".pydistutils.cfg"})," in your home directory with content"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[config]\ncompiler=intelem\nfcompiler=intelem\n[build_clib]\ncompiler=intelem\nfcompiler=intelem\n[build]\ncompiler=intelem\n[build_ext]\ncompiler=intelem\nfcompiler=intelem\n"})}),"\n",(0,i.jsx)(n.p,{children:"and then simply run"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install numpy\npip install scipy\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note: If you don't provide this info to pip, it will look for and use the GNU compiler collection by default."}),"\n",(0,i.jsxs)(n.p,{children:["Note: While numpy installed without problems I did receive a compilation error with icc 14.0.0. Possibly related to ",(0,i.jsx)(n.a,{href:"https://mail.scipy.org/pipermail/scipy-dev/2013-March/018506.html",children:"this"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Parts (1) and (2) relied on the following StackExchange posts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://stackoverflow.com/questions/13769936/supplying-numpy-site-cfg-arguments-to-pip",children:"http://stackoverflow.com/questions/13769936/supplying-numpy-site-cfg-arguments-to-pip"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://stackoverflow.com/questions/15725869/pass-build-ext-options-to-pip-install",children:"http://stackoverflow.com/questions/15725869/pass-build-ext-options-to-pip-install"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const l={},o=i.createContext(l);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
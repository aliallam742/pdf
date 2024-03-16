import{a as A}from"./chunk-MWH7WWRR.js";import{a as V}from"./chunk-D33EGOPS.js";import{a as S}from"./chunk-JCWPYGSE.js";import"./chunk-SPLEEHVV.js";import{c as M,e as p,g as b,h as P,i as I,j as B,l as x,m as T,n as G}from"./chunk-U3FSVHWY.js";import{m as K}from"./chunk-EPQI4F3N.js";import"./chunk-QYK7AOWZ.js";import"./chunk-XSSXK7EZ.js";import{k as y,n as E}from"./chunk-4644OJJN.js";import{Bb as h,Cb as v,Kb as a,Pa as s,Rb as C,Sb as _,Ub as F,V as U,lb as w,na as g,nb as l,sb as e,tb as r,ub as u}from"./chunk-Y7QBYHK6.js";function D(t,n){t&1&&(e(0,"small",20),a(1,"email is requred"),r())}function N(t,n){t&1&&(e(0,"small",20),a(1,"minimum length is 6 characters"),r())}function L(t,n){t&1&&(e(0,"small",20),a(1,"email is not valid"),r())}function O(t,n){if(t&1&&(e(0,"div",18),w(1,D,2,0,"small",19)(2,N,2,0,"small",19)(3,L,2,0,"small",19),r()),t&2){let c=v(),m,i,o;s(),l("ngIf",(m=c.forgetPasswordForm.get("email"))==null?null:m.getError("required")),s(),l("ngIf",(i=c.forgetPasswordForm.get("email"))==null?null:i.getError("minlength")),s(),l("ngIf",(o=c.forgetPasswordForm.get("email"))==null?null:o.getError("email"))}}var H=t=>({"bad-input":t}),Q=t=>({"disabled-butn":t}),X=(()=>{let n=class n{constructor(){this.http=g(S),this.router=g(K),this.forgetPasswordForm=new I({email:new B("",[p.required,p.minLength(6),p.email])})}submitForgetPassword(m){this.http.ForgetPassword(m.value).subscribe({next:i=>{i.succeeded&&this.router.navigate([`/${A.resetPassword}`])},error:i=>{console.log(i)}})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=U({type:n,selectors:[["app-forget-password"]],standalone:!0,features:[C([]),_],decls:27,vars:9,consts:[[1,"auth"],[1,"auth-card"],[1,"row"],[1,"col-md-6"],[1,"auth-img-text"],["src","../../../../assets/auth/images/forget.png","alt","",1,"auth-img"],[1,"auth-text"],[1,"logo"],["src","../../../../assets/auth/images/logo.png","alt","","srcset",""],[1,"h-50","ps-5"],[1,"auth-form"],[1,"form-head"],[3,"formGroup","ngSubmit"],[1,"auth-input"],["for","email"],["formControlName","email","type","email","placeholder","you@domain.com","id","email",1,"input",3,"ngClass"],["class","error-div",4,"ngIf"],["type","submit",1,"form-btn",3,"disabled","ngClass"],[1,"error-div"],["class","p-error",4,"ngIf"],[1,"p-error"]],template:function(i,o){if(i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),u(5,"img",5),e(6,"div",6)(7,"div",7),u(8,"img",8),r(),e(9,"div",9)(10,"h2"),a(11,"Automation Visitors Management System"),r(),e(12,"p"),a(13,"Streamlining Entry: Enhancing Security and Efficiency with Automation in Visitor Management"),r()()()()(),e(14,"div",3)(15,"div",10)(16,"div")(17,"h2",11),a(18,"Forget Password"),r(),e(19,"form",12),h("ngSubmit",function(){return o.submitForgetPassword(o.forgetPasswordForm)}),e(20,"div",13)(21,"label",14),a(22,"Email"),r(),u(23,"input",15),w(24,O,4,3,"div",16),r(),e(25,"button",17),a(26,"Send Reset Code"),r()()()()()()()()),i&2){let f,d;s(19),l("formGroup",o.forgetPasswordForm),s(4),l("ngClass",F(5,H,((f=o.forgetPasswordForm.get("email"))==null?null:f.errors)&&((f=o.forgetPasswordForm.get("email"))==null?null:f.touched))),s(),l("ngIf",((d=o.forgetPasswordForm.get("email"))==null?null:d.errors)&&((d=o.forgetPasswordForm.get("email"))==null?null:d.touched)),s(),l("disabled",o.forgetPasswordForm.invalid)("ngClass",F(7,Q,o.forgetPasswordForm.invalid))}},dependencies:[V,x,M,b,P,T,G,y,E],styles:['@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZJhiI2B.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZthiI2B.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZNhiI2B.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZxhiI2B.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZBhiI2B.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZFhiI2B.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.auth-img[_ngcontent-%COMP%]{border-radius:26px}']});let t=n;return t})();export{X as ForgetPasswordComponent};

(this["webpackJsonpsocial_network_2.0"]=this["webpackJsonpsocial_network_2.0"]||[]).push([[7],{306:function(e,t,s){e.exports={settings_wrapper:"Settings_settings_wrapper__P1qZF",upload_Photo_wrapper:"Settings_upload_Photo_wrapper__2pIvc",settings_form:"Settings_settings_form__1D2bN",settings_box_wrapper:"Settings_settings_box_wrapper__29_RQ",input_info_wr:"Settings_input_info_wr__2mUx4",contacts_header:"Settings_contacts_header__1vcoR",updating_success:"Settings_updating_success__3jace"}},344:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(12),c=s(306),i=s.n(c),o=s(111),r=s(81),p=s(122),l=s(123),u=s(1),_=Object(o.a)("input"),j=Object(o.a)("textarea"),d=Object(r.a)(300),b=Object(l.a)({form:"settingsForm"})((function(e){var t=e.handleSubmit,s=e.profile,n=e.updatingBioSuccess;return Object(u.jsxs)("form",{onSubmit:t,className:i.a.settings_form,children:[Object(u.jsxs)("div",{className:i.a.settings_box_wrapper,children:[Object(u.jsx)("span",{children:"Full Name:"}),Object(u.jsx)("div",{className:i.a.input_info_wr,children:Object(u.jsx)(p.a,{name:"fullName",component:_,placeholder:"Full name"})})]}),Object(u.jsxs)("div",{className:i.a.settings_box_wrapper,children:[Object(u.jsx)("span",{children:"Looking For A Job:"}),Object(u.jsx)("div",{className:i.a.input_info_wr,children:Object(u.jsx)(p.a,{name:"lookingForAJob",component:_,type:"checkbox"})})]}),Object(u.jsxs)("div",{className:i.a.settings_box_wrapper,children:[Object(u.jsx)("span",{children:"Job Description:"}),Object(u.jsx)("div",{className:i.a.input_info_wr,children:Object(u.jsx)(p.a,{name:"lookingForAJobDescription",component:j,validate:[d],placeholder:"Your skills"})})]}),Object(u.jsxs)("div",{className:i.a.settings_box_wrapper,children:[Object(u.jsx)("span",{children:"About Me:"}),Object(u.jsx)("div",{className:i.a.input_info_wr,children:Object(u.jsx)(p.a,{name:"aboutMe",component:j,validate:[d],placeholder:"About me"})})]}),Object(u.jsx)("h5",{className:i.a.contacts_header,children:"Contacts"}),Object.keys(s.contacts).map((function(e){return Object(u.jsxs)("div",{className:i.a.settings_box_wrapper,children:[Object(u.jsxs)("span",{children:[e,":"]}),Object(u.jsx)("div",{className:i.a.input_info_wr,children:Object(u.jsx)(p.a,{name:"contacts."+e,component:_})})]},e)})),Object(u.jsx)("button",{children:"Save changes"}),Object(u.jsx)("span",{className:i.a.updating_success,children:n})]})})),f=function(e){var t=e.profile,s=e.saveSettingsForm,n=e.updatingBioSuccess,a=e.uploadPhoto;return Object(u.jsxs)("div",{className:i.a.settings_wrapper,children:[Object(u.jsxs)("div",{className:i.a.upload_Photo_wrapper,children:[Object(u.jsx)("span",{children:"Upload your photo:"}),Object(u.jsx)("input",{onChange:a,type:"file"})]}),Object(u.jsx)(b,{onSubmit:s,initialValues:t,profile:t,updatingBioSuccess:n})]})},h=s(87),g=s(51);t.default=Object(a.b)((function(e){return{profile:e.profilePage.profile,updatingBioSuccess:e.profilePage.updatingBioSuccess}}),{refreshProfileInSettings:h.e,updateBioProfile:h.g,updateWasSuccessfully:h.i,savePhoto:h.f})((function(e){var t=e.profile,s=e.refreshProfileInSettings,a=e.updateBioProfile,c=e.updatingBioSuccess,i=e.updateWasSuccessfully,o=e.savePhoto;Object(n.useEffect)((function(){t||s()}),[t]),Object(n.useEffect)((function(){return function(){setTimeout((function(){i("")}),4e3)}}),[c]);return t?Object(u.jsx)(f,{saveSettingsForm:function(e){a(e)},profile:t,updatingBioSuccess:c,uploadPhoto:function(e){e.target.files&&o(e.target.files[0])}}):Object(u.jsx)(g.a,{})}))}}]);
//# sourceMappingURL=7.ec3ec1dd.chunk.js.map
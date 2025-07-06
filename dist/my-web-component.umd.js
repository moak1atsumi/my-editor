(function(B,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(B=typeof globalThis<"u"?globalThis:B||self,e(B.MyWebComponent={},B.Vue))})(this,function(B,e){"use strict";const $e={class:"editor-container"},Ve={class:"tab-navigation"},Ne={class:"editor-content"},Ce={key:0,class:"tab-content"},ve={class:"data-display"},Be={class:"data-tabs"},ze={class:"data-content"},Te={key:0,class:"data-section"},Se={key:0,class:"rendered-content"},Me={class:"add-part-button-container"},Pe={class:"component-header"},Ae={class:"component-type"},Le={class:"component-module"},De={class:"component-id"},Ie={class:"header-actions"},je=["onClick"],Fe=["onClick"],He=["innerHTML"],Ue={class:"add-part-button-container"},Ke=["onClick"],Re={key:1,class:"no-data"},Oe={key:1,class:"data-section"},We={key:2,class:"data-section"},Ye={key:0,class:"parts-display"},qe={class:"template-code"},Je={key:1},Xe={class:"part-selector-content"},Ge={key:0,class:"parts-list"},Qe={class:"part-section-title"},Ze={class:"modules-grid"},et=["onClick"],tt={class:"module-title"},ot=["innerHTML"],rt={class:"part-selector-content"},nt={key:0,class:"parts-list"},at={class:"part-section-title"},it={class:"modules-grid"},lt=["onClick"],st={class:"module-title"},dt=["innerHTML"],ct={class:"toolbar-group"},pt={class:"toolbar-group"},ft={class:"editor-content-sidebar"},gt={key:0,class:"editable-component"},mt={class:"component-info"},bt={class:"component-type"},ut={class:"component-module"},xt={class:"component-id"},ht={class:"editor-fields"},yt={class:"field-label"},kt={key:0,class:"radio-group"},wt=["id","onUpdate:modelValue","value","name"],Et=["for"],_t={key:1,class:"checkbox-group"},$t=["id","checked","onChange"],Vt=["for"],Nt={key:0,class:"field-group"},Ct=["for"],vt=["id","onUpdate:modelValue","type","readonly"],Bt={key:0,class:"array-field"},zt={class:"item-header"},Tt={class:"item-id"},St=["onClick"],Mt={class:"item-fields"},Pt={class:"field-label"},At={key:0,class:"radio-group"},Lt=["id","onUpdate:modelValue","value","name"],Dt=["for"],It={key:1,class:"checkbox-group"},jt=["id","checked","onChange"],Ft=["for"],Ht={key:0,class:"field-group"},Ut=["onUpdate:modelValue","type"],Kt=["onClick"],Rt={key:0,class:"nested-content"},Ot={class:"nested-info"},Wt={key:1,class:"tab-content"},Yt={class:"parts-management"},qt={class:"parts-header"},Jt={class:"search-filter-section"},Xt={class:"search-box"},Gt={class:"filter-box"},Qt=["value"],Zt={class:"modal-header"},eo={class:"modal-title"},to={class:"modal-subtitle"},oo={class:"modal-body"},ro={class:"form-layout"},no={class:"form-section"},ao={key:0,class:"form-group"},io={class:"type-input-group"},lo=["value"],so={key:1,class:"form-group"},co={class:"form-group"},po={class:"body-editor-container"},fo={class:"preview-section"},go={class:"preview-container"},mo=["innerHTML"],bo={class:"modal-footer"},uo={class:"modal-actions"},xo=["disabled"],ho={class:"parts-list-container"},yo={key:0,class:"parts-grid"},ko={class:"section-header"},wo={class:"module-count"},Eo={class:"modules-list"},_o={class:"module-header"},$o={class:"module-actions"},Vo=["onClick"],No=["onClick"],Co=["innerHTML"],vo={key:1,class:"no-parts"},Bo={key:2,class:"tab-content"},zo={class:"page-preview"},To={class:"preview-tabs"},So={class:"page-preview-content"},Mo=["innerHTML"],Po={key:1,class:"html-source"},Ao=e.defineComponent({__name:"MyEditor.ce",props:{parts:{default:()=>({}),type:Object},page:{default:()=>({}),type:Object}},emits:["update:parts","update:page"],setup(Lo,{emit:Do}){const E=Lo,Io=Do,h=e.ref([]),$=e.ref(null),u=e.ref(null),A=e.ref(!1),q=e.ref(!1),J=e.ref(0),X=e.ref(!1),G=e.ref(""),L=e.ref(0),w=e.ref(null),x=e.ref(null),z=e.ref("editor"),T=e.ref("rendered"),V=e.ref("rendered"),Q=r=>{z.value=r,r==="editor"?V.value="rendered":r==="preview"&&(T.value="rendered")},D=e.ref(!1),y=e.ref({type:"",title:"",body:""}),jo=e.ref(null),I=e.ref(null),j=e.ref(""),F=e.ref(""),Z=e.computed(()=>{if(!Array.isArray(_.value))return[];let r=_.value;if(F.value&&(r=r.filter(t=>t.type===F.value)),j.value.trim()){const t=j.value.toLowerCase();r=r.map(o=>({...o,module:o.module.filter(n=>n.title.toLowerCase().includes(t)||n.body.toLowerCase().includes(t))})).filter(o=>o.module.length>0)}return r}),ee=e.computed(()=>Array.isArray(_.value)?_.value.map(r=>r.type):[]),v=e.ref(!1),H=e.ref(null),le=e.computed(()=>(v.value||y.value.type.trim()!==""&&y.value.title.trim()!=="")&&y.value.body.trim()!==""),U=()=>{D.value=!1,v.value=!1,H.value=null,y.value={type:"",title:"",body:""}},Fo=r=>{const t=r.target;t&&(y.value.body=t.value)},Ho=()=>{if(le.value){if(v.value&&H.value){const{sectionIndex:r,moduleIndex:t}=H.value,o=[..._.value];o[r].module[t].body=y.value.body,ie(o),console.log("パーツを更新:",{sectionIndex:r,moduleIndex:t})}else{const r=Array.isArray(_.value)?[..._.value]:[];let t=r.findIndex(o=>o.type===y.value.type);t===-1&&(r.push({type:y.value.type,module:[]}),t=r.length-1),r[t].module.push({title:y.value.title,body:y.value.body}),ie(r),console.log("新しいパーツを登録:",y.value)}U()}},Uo=(r,t)=>{if(!Array.isArray(_.value))return;const o=_.value[r],n=o.module[t];y.value={type:o.type,title:n.title,body:n.body},v.value=!0,H.value={sectionIndex:r,moduleIndex:t},D.value=!0},Ko=(r,t)=>{if(Array.isArray(_.value)&&window.confirm("このパーツを削除しますか？")){const o=[..._.value];o[r].module.splice(t,1),o[r].module.length===0&&o.splice(r,1),ie(o),console.log("パーツを削除:",{sectionIndex:r,moduleIndex:t})}},M=(r,t)=>{if(console.log("findComponentByPath 呼び出し:",{path:t,dataLength:r.length}),t.length===0)return console.log("パスが空のためnullを返します"),null;if(t[0]>=r.length)return console.log("パス[0]がデータ範囲外:",{path0:t[0],dataLength:r.length}),null;let o=r[t[0]];console.log("開始コンポーネント:",{index:t[0],id:o==null?void 0:o.id,type:o==null?void 0:o.type,module_name:o==null?void 0:o.module_name});for(let n=1;n<t.length;n++){if(console.log(`階層${n}への移動: パス[${n}] = ${t[n]}`),!o.nested_parts||!Array.isArray(o.nested_parts))return console.log("nested_partsが存在しないかまたは配列ではありません:",o.nested_parts),null;if(t[n]>=o.nested_parts.length)return console.log("パス[i]がnested_parts範囲外:",{pathI:t[n],nestedPartsLength:o.nested_parts.length}),null;o=o.nested_parts[t[n]],console.log(`階層${n}のコンポーネント:`,{index:t[n],id:o==null?void 0:o.id,type:o==null?void 0:o.type,module_name:o==null?void 0:o.module_name})}return console.log("最終的に見つかったコンポーネント:",{id:o==null?void 0:o.id,type:o==null?void 0:o.type,module_name:o==null?void 0:o.module_name,全パス:t}),o},Ro=(r,t)=>{if(t.length===1)return r;let o=r[t[0]];for(let n=1;n<t.length-1;n++){if(!o.nested_parts||!Array.isArray(o.nested_parts))return[];o=o.nested_parts[t[n]]}return o.nested_parts||[]},K=r=>r.split("-").map(Number),R=r=>r.join("-"),te=(r,t,o=[])=>{for(let n=0;n<r.length;n++){const a=r[n],l=[...o,n];if(a.id===t)return{component:a,path:l};if(a.nested_parts&&Array.isArray(a.nested_parts)){const i=te(a.nested_parts,t,l);if(i)return i}}return null},oe=(r,t)=>{const o=`\\{\\$${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}:[^}]+\\}`,n=new RegExp(o,"g");let a,l=!1;for(;(a=n.exec(r))!==null;){const i=r.substring(0,a.index),s=r.substring(a.index+a[0].length),c=[/\s+\w+\s*=\s*["']?$/,/\s+src\s*=\s*["']?$/,/\s+alt\s*=\s*["']?$/,/\s+type\s*=\s*["']?$/,/\s+href\s*=\s*["']?$/,/\s+class\s*=\s*["']?$/,/\s+id\s*=\s*["']?$/,/\s+value\s*=\s*["']?$/,/\s+placeholder\s*=\s*["']?$/,/\s+title\s*=\s*["']?$/],d=[/^["']?\s*>/,/^["']?\s+\w+/,/^["']?\s*\w+\s*=/];c.some(f=>f.test(i))||c.some(f=>f.test(i))&&d.some(f=>f.test(s))||(l=!0)}return l},se=(r,t,o)=>r.replace(/\{\$([^:]+):(.*?)\}/g,(n,a,l)=>{var f,b;const i=`src_${a}`,s=`alt_${a}`,c=`type_${a}`;if(t[i])return t[i];if(t[s])return t[s];if(t[c])return t[c];const d=t[a]||l;return oe(o,a)?((f=w.value)==null?void 0:f.componentId)===t.id&&((b=w.value)==null?void 0:b.paramName)===a?`<div class="tiptap-editor-container" data-component-id="${t.id}" data-param="${a}"></div>`:`<span class="editable-text" data-component-id="${t.id}" data-param="${a}" style="cursor: pointer; border-radius: 2px; transition: background-color 0.2s; border: 1px solid transparent;" onmouseover="this.style.backgroundColor='#f0f8ff'; this.style.borderColor='#007bff';" onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='transparent';" onclick="console.log('Tiptap適用(テンプレートベース):', '${t.id}', '${a}'); if(window.startTiptapEdit) window.startTiptapEdit('${t.id}', '${a}'); else console.error('startTiptapEdit関数が見つかりません');">${d}</span>`:d}),Oo=()=>{const r="my-editor-styles";if(document.getElementById(r))return;const t=`
      /* My Editor Component Styles */
      .editor-container {
        padding: 16px;
        background: #f5f5f5;
        border-radius: 8px;
        margin: 16px 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .editor-container h3 {
        margin: 0 0 16px 0;
        color: #333;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .editor-content {
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .preview-section {
        margin-bottom: 24px;
      }

      .preview-section h4 {
        margin: 0 0 16px 0;
        color: #555;
        font-size: 1.25rem;
        font-weight: 500;
      }

      .rendered-content {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow: hidden;
      }

      .rendered-component {
        border-bottom: 1px solid #e0e0e0;
      }

      .rendered-component:last-child {
        border-bottom: none;
      }

      .component-header {
        background: #f8f9fa;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid #e9ecef;
        font-size: 0.875rem;
      }

      .component-type {
        background: #007bff;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
      }

      .component-module {
        background: #6c757d;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .component-id {
        color: #6c757d;
        font-family: monospace;
        font-size: 0.75rem;
      }

      .component-preview {
        padding: 16px;
        background: #fff;
        cursor: pointer;
      }

      .component-preview:hover {
        background: #f8f9fa;
      }

      .editor-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        z-index: 9999;
        pointer-events: all;
      }

      .editor-sidebar {
        width: 450px;
        height: 100vh;
        background: #ffffff;
        border-left: 1px solid #e5e7eb;
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
        overflow-y: auto;
        pointer-events: all;
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .editor-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e5e7eb;
        flex-shrink: 0;
      }

      .editor-header h4 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .header-buttons {
        display: flex;
        gap: 12px;
      }

      .save-button {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        transition: all 0.2s;
      }

      .save-button:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-1px);
      }

      .close-button {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 300;
        transition: all 0.2s;
      }

      .close-button:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
      }

      .editor-content-sidebar {
        flex: 1;
        overflow-y: auto;
        padding: 0;
      }

      .editable-component {
        padding: 24px;
      }

      .component-info {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .editor-fields {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .template-field {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .field-label {
        display: block;
        font-weight: 600;
        color: #374151;
        margin-bottom: 12px;
        font-size: 0.875rem;
        text-transform: capitalize;
      }

      .radio-group,
      .checkbox-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .radio-item,
      .checkbox-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        transition: background-color 0.2s;
      }

      .radio-item:hover,
      .checkbox-item:hover {
        background: #f1f5f9;
      }

      .radio-input,
      .checkbox-input {
        width: 16px;
        height: 16px;
        accent-color: #3b82f6;
      }

      .radio-label,
      .checkbox-label {
        font-size: 0.875rem;
        color: #4b5563;
        cursor: pointer;
      }

      .field-group {
        margin-bottom: 16px;
      }

      .field-group label {
        display: block;
        font-weight: 500;
        color: #374151;
        margin-bottom: 6px;
        font-size: 0.875rem;
      }

      .field-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 0.875rem;
        transition: border-color 0.2s, box-shadow 0.2s;
      }

      .field-input:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }

      .array-field {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .array-field h6 {
        margin: 0 0 12px 0;
        font-size: 1rem;
        font-weight: 600;
        color: #374151;
      }

      .array-item {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        padding: 12px;
        margin-bottom: 12px;
      }

      .array-item:last-child {
        margin-bottom: 0;
      }

      .item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #f3f4f6;
      }

      .item-id {
        font-size: 0.875rem;
        font-weight: 500;
        color: #6b7280;
      }

      .remove-btn {
        background: #ef4444;
        color: white;
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .remove-btn:hover {
        background: #dc2626;
      }

      .add-btn {
        background: #10b981;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .add-btn:hover {
        background: #059669;
      }

      .item-fields {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .nested-content {
        background: #f3f4f6;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
      }

      .nested-info {
        color: #6b7280;
        font-size: 0.875rem;
        font-style: italic;
      }

      .button-section {
        display: flex;
        gap: 12px;
        margin-top: 24px;
        padding-top: 16px;
        border-top: 1px solid #e5e7eb;
      }

      .button-section button {
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #f0f0f0;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.2s;
      }

      .button-section button:hover {
        background: #e0e0e0;
      }

      .button-section button:active {
        background: #d0d0d0;
      }

      .send-btn {
        color: white !important;
      }

      .page-btn {
        background: #28a745 !important;
        border-color: #28a745 !important;
      }

      .page-btn:hover {
        background: #1e7e34 !important;
        border-color: #1e7e34 !important;
      }

      .parts-btn {
        background: #007bff !important;
        border-color: #007bff !important;
      }

      .parts-btn:hover {
        background: #0056b3 !important;
        border-color: #0056b3 !important;
      }

      .reset-btn {
        background: #6c757d !important;
        border-color: #6c757d !important;
      }

      .reset-btn:hover {
        background: #545b62 !important;
        border-color: #545b62 !important;
      }

      .parts-display {
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 12px;
      }

      .section-item {
        margin-bottom: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        background: #fafafa;
      }

      .section-item h5 {
        margin: 0;
        padding: 8px 12px;
        background: #f0f0f0;
        border-bottom: 1px solid #e0e0e0;
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }

      .module-item {
        padding: 12px;
        border-bottom: 1px solid #e8e8e8;
      }

      .module-item:last-child {
        border-bottom: none;
      }

      .module-item h6 {
        margin: 0 0 8px 0;
        font-size: 13px;
        color: #666;
        font-weight: normal;
        background: #e8f4f8;
        padding: 4px 8px;
        border-radius: 3px;
        display: inline-block;
      }

      .template-code {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
        overflow: hidden;
      }

      .template-code pre {
        margin: 0;
        padding: 12px;
        background: #fff;
        color: #333;
        font-size: 11px;
        line-height: 1.4;
        overflow-x: auto;
      }

      .header-actions {
        display: flex;
        gap: 8px;
        margin-left: auto;
      }

      .edit-button {
        background: #007bff;
        color: white;
        border: none;
        padding: 4px 8px;
        border-radius: 3px;
        font-size: 11px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .edit-button:hover {
        background: #0056b3;
      }

      .delete-button {
        background: #dc3545;
        color: white;
        border: none;
        padding: 4px 8px;
        border-radius: 3px;
        font-size: 11px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .delete-button:hover {
        background: #c82333;
      }

      .data-display {
        display: flex;
        flex-direction: column;
        gap: 16px;
        flex-wrap: wrap;
      }

      .data-section {
        flex: 1;
        min-width: 300px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 12px;
      }

      .data-section h4 {
        margin: 0 0 8px 0;
        color: #555;
        font-size: 14px;
      }

      .data-section pre {
        margin: 0;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 12px;
        color: #333;
        background: #f8f8f8;
        padding: 8px;
        border-radius: 4px;
        overflow-x: auto;
      }

      .nested-components {
        margin-top: 16px;
        padding: 16px;
        background: #f8f9fa;
        border-radius: 4px;
        border: 1px solid #e9ecef;
      }

      .nested-components h5 {
        margin: 0 0 12px 0;
        color: #495057;
        font-size: 14px;
        font-weight: bold;
      }

      .nested-component {
        border: 1px solid #dee2e6;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 12px;
        background: #fff;
      }

      .nested-component:last-child {
        margin-bottom: 0;
      }

      .nested-header {
        background: #e9ecef !important;
        font-size: 11px !important;
      }

      .nested-preview {
        padding: 12px !important;
        border-top: 1px solid #dee2e6;
      }

      .nested-preview:hover {
        background: #f1f3f4 !important;
      }

      /* パーツ追加ボタンのスタイル */
      .add-part-button-container {
        display: flex;
        justify-content: center;
        padding: 8px 0;
        background: #f8f9fa;
        border-bottom: 1px solid #e9ecef;
      }

      .add-part-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: #28a745;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.875rem;
        transition: all 0.2s ease;
      }

      .add-part-button:hover {
        background: #218838;
        transform: translateY(-1px);
      }

      .plus-icon {
        font-size: 1rem;
        font-weight: bold;
      }

      /* ネスト用パーツ追加ボタンのスタイル */
      .add-nested-part-button-container {
        display: flex;
        justify-content: center;
        padding: 6px 0;
        background: #e8f5e8;
        border-bottom: 1px solid #c3e6c3;
        margin: 4px 0;
      }

      .add-nested-part-button {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        background: #17a2b8;
        color: white;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.2s ease;
      }

      .add-nested-part-button:hover {
        background: #138496;
        transform: translateY(-1px);
      }

      /* パーツ選択モーダルのスタイル */
      .part-selector-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      .part-selector-modal {
        background: white;
        border-radius: 12px;
        width: 90%;
        max-width: 800px;
        max-height: 80%;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      .part-selector-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px;
        border-bottom: 1px solid #e9ecef;
        background: #f8f9fa;
      }

      .part-selector-header h4 {
        margin: 0;
        color: #333;
        font-size: 1.25rem;
      }

      .part-selector-content {
        padding: 20px 24px;
        overflow-y: auto;
        max-height: 60vh;
      }

      .part-section {
        margin-bottom: 32px;
      }

      .part-section-title {
        margin: 0 0 16px 0;
        color: #495057;
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: capitalize;
        border-bottom: 2px solid #007bff;
        padding-bottom: 8px;
      }

      .modules-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 16px;
      }

      .module-card {
        border: 1px solid #e9ecef;
        border-radius: 8px;
        padding: 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: white;
      }

      .module-card:hover {
        border-color: #007bff;
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
        transform: translateY(-2px);
      }

      .module-title {
        font-weight: 600;
        color: #333;
        margin-bottom: 12px;
        font-size: 0.95rem;
      }

      .module-preview {
        font-size: 0.8rem;
        color: #6c757d;
        line-height: 1.4;
        overflow: hidden;
        position: relative;
      }

      /* Tiptapエディターのスタイル */
      .editable-text {
        position: relative;
        min-height: 20px;
        border: 2px solid transparent;
        transition: all 0.2s ease;
      }

      .editable-text:hover {
        border-color: #007bff;
        background-color: #f0f8ff !important;
      }

      .tiptap-toolbar {
        position: fixed !important;
        top: 10px !important;
        left: 0 !important;
        right: 0 !important;
        margin: auto !important;
        width: fit-content !important;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .toolbar-group {
        display: flex;
        gap: 4px;
        padding: 0 8px;
        border-right: 1px solid #e0e0e0;
      }

      .toolbar-group:last-child {
        border-right: none;
      }

      .toolbar-button {
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        padding: 6px 10px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s;
        min-width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .toolbar-button:hover {
        background: #e9ecef;
        border-color: #adb5bd;
      }

      .toolbar-button.is-active {
        background: #007bff;
        color: white;
        border-color: #007bff;
      }

      .toolbar-button.save-btn {
        background: #28a745;
        color: white;
        border-color: #28a745;
        font-weight: 500;
      }

      .toolbar-button.save-btn:hover {
        background: #218838;
        border-color: #1e7e34;
      }

      .tiptap-editor-container {
        min-height: 100px;
        border: 2px solid #007bff;
        border-radius: 4px;
        padding: 8px;
        background: white;
      }

      /* ProseMirror エディターのスタイル */
      .ProseMirror {
        outline: none;
        min-height: 50px;
        padding: 8px;
        line-height: 1.5;
      }

      .ProseMirror p {
        margin: 0.5em 0;
      }

      .ProseMirror a {
        color: #007bff;
        text-decoration: underline;
      }

      .ProseMirror strong {
        font-weight: bold;
      }

      .ProseMirror em {
        font-style: italic;
      }

      .ProseMirror u {
        text-decoration: underline;
      }

      .ProseMirror mark {
        background-color: #ffeb3b;
        padding: 2px 4px;
        border-radius: 2px;
      }

      /* Tiptapエディタ */
      .tiptap-editor-container {
        position: static !important;
        display: inline-block !important;
        min-height: 0 !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        background: none !important;
        box-shadow: none !important;
        max-width: 100% !important;
        vertical-align: middle;
      }
      .tiptap-editor {
        border: 1px solid #ced4da;
        border-radius: 4px;
        padding: 8px;
        min-height: 100px;
      }
      .tiptap-editor:focus {
        outline: none;
        border-color: #007bff;
      }

      /* パーツ管理画面のボタン共通スタイル */
      .edit-btn, .delete-btn, .edit-action-btn, .delete-action-btn {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.2s;
        margin-right: 8px;
      }
      .edit-btn, .edit-action-btn {
        background: #17a2b8;
        color: white;
      }
      .edit-btn:hover, .edit-action-btn:hover {
        background: #138496;
      }
      .delete-btn, .delete-action-btn {
        background: #dc3545;
        color: white;
      }
      .delete-btn:hover, .delete-action-btn:hover {
        background: #c82333;
      }
      .btn-primary {
        background: linear-gradient(135deg,#007bff 0%,#0056b3 100%);
        color: white;
      }
      .btn-primary:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,123,255,0.3);
      }
      .btn-primary:disabled {
        background: #6c757d;
        cursor: not-allowed;
      }
      .btn-secondary {
        background: #6c757d;
        color: white;
      }
      .btn-secondary:hover {
        background: #5a6268;
      }

      /* パーツ管理画面のみ 編集・削除ボタンを右上に小さく配置 */
      .parts-management .module-header, .parts-management .header-actions {
        position: relative;
      }
      .parts-management .module-actions, .parts-management .header-actions {
        position: absolute;
        top: 8px;
        right: 8px;
        display: flex;
        gap: 4px;
        z-index: 2;
      }
      .parts-management .edit-btn, .parts-management .delete-btn, .parts-management .edit-action-btn, .parts-management .delete-action-btn {
        padding: 4px 10px;
        font-size: 12px;
        border-radius: 6px;
        margin-right: 0;
        min-width: 0;
        height: 28px;
      }
    `,o=document.createElement("style");o.id=r,o.textContent=t,document.head.appendChild(o)};e.onMounted(()=>{Oo()}),e.watch(()=>E.page,r=>{Array.isArray(r)&&(h.value=JSON.parse(JSON.stringify(r)))},{immediate:!0,deep:!0});const O=r=>{if(Array.isArray(r))return r.map(t=>O(t));if(r&&typeof r=="object"){const t={};for(const[o,n]of Object.entries(r))o==="body"&&typeof n=="string"?t[o]=n.replace(/\\n/g,`
`).replace(/\\"/g,'"'):t[o]=O(n);return t}return r},Wo=e.computed(()=>{const r=h.value.length>0?h.value:E.page,t=O(r);return JSON.stringify(t,null,2)}),Yo=e.computed(()=>{const r=O(E.parts);return JSON.stringify(r,null,2)}),qo=r=>r.replace(/\\n/g,`
`).replace(/\\"/g,'"'),de=r=>{const t=S(r.type,r.module_name);if(!t)return[];const o=[],n=t.match(/\(\$([^:?]+):(.*?)\)/g);n&&n.forEach(l=>{const i=l.match(/\(\$([^:?]+):(.*?)\)/);if(i){const[,s,c]=i;let d=c.split("|");d[d.length-1]===""&&(d=d.slice(0,-1),d.push("指定無し")),d=d.filter(p=>p.trim()!==""),o.push({type:"radio",paramName:s,propKey:`class_${s}`,options:d,label:`${s} (ラジオボタン)`})}});const a=t.match(/\(\$([^:?]+)\?:(.*?)\)/g);return a&&a.forEach(l=>{const i=l.match(/\(\$([^:?]+)\?:(.*?)\)/);if(i){const[,s,c]=i;let d=c.split("|");d[d.length-1]===""&&(d=d.slice(0,-1),d.push("指定無し")),d=d.filter(p=>p.trim()!==""),o.push({type:"checkbox",paramName:s,propKey:`class_${s}`,options:d,label:`${s} (チェックボックス)`})}}),o},ce=(r,t,o,n)=>{r[t]||(r[t]=[]),n?r[t].includes(o)||r[t].push(o):r[t]=r[t].filter(a=>a!==o)},pe=(r,t,o)=>Array.isArray(r[t])&&r[t].includes(o),fe=(r,t)=>de(r).some(n=>n.propKey===t),Jo=(r,t)=>!!(["content","cards","paragraphs"].includes(r)||Array.isArray(t)||typeof t=="object"&&t!==null),Xo=(r,t,o)=>r==="id"||r==="type"||r==="module_name"||Jo(r,t)||fe(o,r)||t===""||t===null||t===void 0||typeof t=="string"&&t.trim()===""||typeof t=="number"&&t===0?!1:typeof t=="string"&&t.trim()!==""||typeof t=="number"&&t!==0||typeof t=="boolean",ge=r=>r.includes("url")||r.includes("src")?"url":r.includes("email")?"email":r.includes("number")||r.includes("count")?"number":"text",Go=(r,t)=>{r[t]||(r[t]=[]);const o={id:`${t}_${Date.now()}`};if(r[t].length>0){const n=r[t][0];Object.keys(n).forEach(a=>{a!=="id"&&(o[a]=typeof n[a]=="string"?"":n[a])})}else t==="paragraphs"?(o.text="",o.class_style="s_normal"):t==="cards"&&(o.card_title="",o.card_desc="",o.class_card_state="s_state1");r[t].push(o)},Qo=(r,t,o)=>{r[t]&&r[t].length>o&&r[t].splice(o,1)},Zo=()=>{Array.isArray(E.page)&&(h.value=JSON.parse(JSON.stringify(E.page)))},S=(r,t)=>{if(!Array.isArray(E.parts))return"";const o=E.parts.find(a=>a.type===r);if(!o)return"";const n=o.module.find(a=>a.title===t);return n?n.body:""},er=(r,t)=>{const o=S(r.type,r.module_name);if(!o)return`<div>テンプレートが見つかりません: ${r.type}/${r.module_name}</div>`;let n=o;return n=n.replace(/@for\(\$([^)]+)\):([\s\S]*?)@endfor/g,(a,l,i)=>(console.log("renderComponentWithNested - @for処理開始:",{arrayName:l,content:i.substring(0,100)+"..."}),r[l]&&Array.isArray(r[l])?(console.log("renderComponentWithNested - 配列データ発見:",{arrayName:l,length:r[l].length}),r[l].map(s=>{console.log("renderComponentWithNested - 配列アイテム処理中:",{item:s,arrayName:l});let c=i;return c=c.replace(/\(\$([^:]+):(.*?)\)/g,(d,p,f)=>{if(s[p]){let m=s[p];return m==="指定無し"&&(m=""),m}const b=`class_${p}`;if(s[b]){let m=s[b];return m==="指定無し"&&(m=""),m}return f.split("|").filter(m=>m.trim())[0]||""}),c=c.replace(/\{\$([^:]+):(.*?)\}/g,(d,p,f)=>{var m,k;console.log("renderComponentWithNested - 配列アイテムテキスト置換処理:",{paramName:p,defaultValue:f,itemValue:s[p]});const b=s[p]||f,g=oe(o,p);if(console.log("renderComponentWithNested - 配列アイテムTiptap判定:",{paramName:p,shouldUseTiptap:g,textValue:b}),g){const N=`${r.id}_${l}_${r[l].indexOf(s)}_${p.replace(/_/g,"-")}`;return console.log("renderComponentWithNested - 配列アイテムTiptap適用:",{uniqueItemId:N,paramName:p}),((m=w.value)==null?void 0:m.componentId)===N&&((k=w.value)==null?void 0:k.paramName)===p?`<div class="tiptap-editor-container" data-component-id="${N}" data-param="${p}"></div>`:`<span class="editable-text" data-component-id="${N}" data-param="${p}" style="cursor: pointer; border-radius: 2px; transition: background-color 0.2s; border: 1px solid transparent;" onmouseover="this.style.backgroundColor='#f0f8ff'; this.style.borderColor='#007bff';" onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='transparent';" onclick="console.log('Tiptap適用(配列アイテム):', '${N}', '${p}'); if(window.startTiptapEdit) window.startTiptapEdit('${N}', '${p}'); else console.error('startTiptapEdit関数が見つかりません');">${b}</span>`}return b}),c}).join("")):"")),n=n.replace(/\(\$([^:]+):(.*?)\)/g,(a,l,i)=>{const s=`class_${l}`;let c=r[s];return c==="指定無し"&&(c=""),c||i.split("|").filter(p=>p.trim())[0]||""}),n=n.replace(/\(\$([^:?]+)\?:(.*?)\)/g,(a,l,i)=>{const s=`class_${l}`,c=r[s];return Array.isArray(c)?c.join(" "):c||""}),n=se(n,r,o),n=n.replace(/@slot\(\$([^)]+)\)@/g,(a,l)=>r[l]&&Array.isArray(r[l])?me(r[l],[t]):""),n},me=(r,t=[])=>{if(!r||r.length===0)return`
        <div class="add-nested-part-button-container">
          <button class="add-nested-part-button" onclick="window.openNestedPartSelector('${R(t)}', 0)">
            <span class="plus-icon">＋</span>
            <span class="button-text">ネストパーツを追加（${t.length+1}階層目）</span>
          </button>
        </div>
      `;let o="";return r.forEach((n,a)=>{const l=[...t,a],i=R(l),s=l.length,c=Math.max(0,s-1)*16;o+=`
        <div class="add-nested-part-button-container">
          <button class="add-nested-part-button" onclick="window.openNestedPartSelector('${R(t)}', ${a})">
            <span class="plus-icon">＋</span>
            <span class="button-text">上にパーツを追加（${t.length+1}階層目）</span>
          </button>
        </div>
      `,o+=`
        <div class="nested-component nested-depth-${s}" style="border: 1px solid #e0e0e0; margin: 8px 0; border-radius: 4px; margin-left: ${c}px;">
          <div class="component-header nested-header" style="background: #f8f9fa; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0;">
            <div>
              <span class="component-type" style="background: #6c757d; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.75rem; margin-right: 8px;">${n.type}</span>
              <span class="component-module" style="color: #495057; font-size: 0.875rem;">${n.module_name}</span>
              <span class="component-id" style="color: #6c757d; font-size: 0.75rem; margin-left: 8px;">ID: ${n.id}</span>
              <span class="depth-indicator" style="color: #6c757d; font-size: 0.75rem; margin-left: 8px;">階層: ${s}</span>
            </div>
            <div class="header-actions">
              <button class="edit-button" onclick="window.openNestedEditor('${i}')" style="background: #007bff; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 0.75rem; margin-right: 4px; cursor: pointer;">編集</button>
              <button class="delete-button" onclick="window.deleteNestedPart('${i}')" style="background: #dc3545; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 0.75rem; cursor: pointer;">削除</button>
            </div>
          </div>
          <div class="nested-component-content" style="padding: 12px;">
            ${tr(n)}
          </div>
        </div>
      `,n.nested_parts&&Array.isArray(n.nested_parts)&&n.nested_parts.length>0&&(o+=me(n.nested_parts,l))}),o+=`
      <div class="add-nested-part-button-container">
        <button class="add-nested-part-button" onclick="window.openNestedPartSelector('${R(t)}', ${r.length})">
          <span class="plus-icon">＋</span>
          <span class="button-text">下にパーツを追加（${t.length+1}階層目）</span>
        </button>
      </div>
    `,o},tr=r=>{const t=S(r.type,r.module_name);if(!t)return`<div>テンプレートが見つかりません: ${r.type}/${r.module_name}</div>`;let o=t;return o=o.replace(/@for\(\$([^)]+)\):([\s\S]*?)@endfor/g,(n,a,l)=>(console.log("renderComponentWithoutSlot - @for処理開始:",{arrayName:a,content:l.substring(0,100)+"..."}),r[a]&&Array.isArray(r[a])?(console.log("renderComponentWithoutSlot - 配列データ発見:",{arrayName:a,length:r[a].length}),r[a].map(i=>{console.log("renderComponentWithoutSlot - 配列アイテム処理中:",{item:i,arrayName:a});let s=l;return s=s.replace(/\(\$([^:]+):(.*?)\)/g,(c,d,p)=>{if(i[d]){let g=i[d];return g==="指定無し"&&(g=""),g}const f=`class_${d}`;if(i[f]){let g=i[f];return g==="指定無し"&&(g=""),g}return p.split("|").filter(g=>g.trim())[0]||""}),s=s.replace(/\{\$([^:]+):(.*?)\}/g,(c,d,p)=>{var g,m;const f=i[d]||p;if(oe(t,d)){const k=`${r.id}_${a}_${r[a].indexOf(i)}_${d.replace(/_/g,"-")}`;return((g=w.value)==null?void 0:g.componentId)===k&&((m=w.value)==null?void 0:m.paramName)===d?`<div class="tiptap-editor-container" data-component-id="${k}" data-param="${d}"></div>`:`<span class="editable-text" data-component-id="${k}" data-param="${d}" style="cursor: pointer; border-radius: 2px; transition: background-color 0.2s; border: 1px solid transparent;" onmouseover="this.style.backgroundColor='#f0f8ff'; this.style.borderColor='#007bff';" onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='transparent';" onclick="console.log('Tiptap適用(配列アイテム):', '${k}', '${d}'); if(window.startTiptapEdit) window.startTiptapEdit('${k}', '${d}'); else console.error('startTiptapEdit関数が見つかりません');">${f}</span>`}return f}),s}).join("")):"")),o=o.replace(/\(\$([^:]+):(.*?)\)/g,(n,a,l)=>{const i=`class_${a}`;let s=r[i];return s==="指定無し"&&(s=""),s||l.split("|").filter(d=>d.trim())[0]||""}),o=o.replace(/\(\$([^:?]+)\?:(.*?)\)/g,(n,a,l)=>{const i=`class_${a}`,s=r[i];return Array.isArray(s)?s.join(" "):s||""}),o=se(o,r,t),o=o.replace(/@slot\(\$([^)]+)\)@/g,""),o},or=()=>{console.log("sendPageData関数が呼ばれました"),console.log("editablePageData:",h.value);const r={data:h.value,type:"page",timestamp:new Date().toISOString()};console.log("eventData:",r);const t=new CustomEvent("dataFromVue",{detail:r,bubbles:!0});console.log("Pageデータのイベントを発火します"),document.dispatchEvent(t),console.log("Pageデータのイベントを発火しました")},rr=()=>{console.log("sendPartsData関数が呼ばれました"),console.log("props.parts:",E.parts);const r={data:E.parts,type:"parts",timestamp:new Date().toISOString()};console.log("eventData:",r);const t=new CustomEvent("dataFromVue",{detail:r,bubbles:!0});console.log("Partsデータのイベントを発火します"),document.dispatchEvent(t),console.log("Partsデータのイベントを発火しました")},nr=(r,t,o)=>!Array.isArray(t)||String(r)==="content"||String(r)==="nested_parts"||String(r)==="paragraphs"&&o.type==="text"||fe(o,r)||t.length===0||t.every(n=>typeof n=="string")?!1:t.every(n=>typeof n=="object"&&n!==null),ar=r=>{$.value=r,u.value=h.value[r],A.value=!0},P=()=>{$.value=null,u.value=null,A.value=!1},ir=()=>{if(u.value&&$.value!==null){if(typeof $.value=="string"&&$.value.includes("-")){const r=K($.value),t=M(h.value,r);t?(Object.assign(t,u.value),console.log("ネストコンポーネントを保存:",{path:r,component:u.value})):console.error("保存対象のコンポーネントが見つかりません:",r)}else h.value[$.value]={...u.value},console.log("トップレベルコンポーネントを保存:",{index:$.value,component:u.value});P()}},lr=r=>{const t=K(r),o=M(h.value,t);o?(u.value=o,$.value=r,A.value=!0,console.log("ネスト編集を開始:",{pathString:r,path:t,component:o})):console.error("編集対象のコンポーネントが見つかりません:",r)},sr=(r,t,o)=>{const n=S(r.type,r.module_name);if(!n)return[];const a=[],l=new RegExp(`@for\\(\\$${t}\\):(.*?)@endfor`,"s"),i=n.match(l);if(i&&i[1]){const s=i[1],c=s.match(/\(\$([^:?]+):(.*?)\)/g);c&&c.forEach(p=>{const f=p.match(/\(\$([^:?]+):(.*?)\)/);if(f){const[,b,g]=f;let m=g.split("|");m[m.length-1]===""&&(m=m.slice(0,-1),m.push("指定無し")),m=m.filter(k=>k.trim()!==""),a.push({type:"radio",paramName:b,propKey:`class_${b}`,options:m,label:`${b} (ラジオボタン)`})}});const d=s.match(/\(\$([^:?]+)\?:(.*?)\)/g);d&&d.forEach(p=>{const f=p.match(/\(\$([^:?]+)\?:(.*?)\)/);if(f){const[,b,g]=f;let m=g.split("|");m[m.length-1]===""&&(m=m.slice(0,-1),m.push("指定無し")),m=m.filter(k=>k.trim()!==""),a.push({type:"checkbox",paramName:b,propKey:`class_${b}`,options:m,label:`${b} (チェックボックス)`})}})}return a},dr=(r,t,o,n,a)=>{if(r==="id"||Array.isArray(t)||typeof t=="object"&&t!==null||t===""||t===null||t===void 0||typeof t=="string"&&t.trim()===""||typeof t=="number"&&t===0)return!1;const l=S(o.type,o.module_name);if(l){const i=new RegExp(`@for\\(\\$${n}\\):(.*?)@endfor`,"s"),s=l.match(i);if(s&&s[1]){const c=s[1],d=c.match(/\(\$([^:?]+):(.*?)\)/g);if(d&&d.map(b=>{const g=b.match(/\(\$([^:?]+):(.*?)\)/);return g?`class_${g[1]}`:null}).filter(Boolean).includes(r))return!1;const p=c.match(/\(\$([^:?]+)\?:(.*?)\)/g);if(p&&p.map(b=>{const g=b.match(/\(\$([^:?]+)\?:(.*?)\)/);return g?`class_${g[1]}`:null}).filter(Boolean).includes(r))return!1}}return typeof t=="string"&&t.trim()!==""||typeof t=="number"&&t!==0||typeof t=="boolean"},be=r=>{J.value=r,q.value=!0},re=()=>{q.value=!1,J.value=0},cr=(r,t)=>{const o=ue(r,t);h.value.splice(J.value,0,o),re()},ue=(r,t)=>{const o=xe();console.log("新しいコンポーネントを作成:",{id:o,partType:r,moduleTitle:t.title});const n={id:o,type:r,module_name:t.title},a=t.body,l=a.match(/\{\$([^:}]+):([^}]+)\}/g);l&&l.forEach(d=>{const p=d.match(/\{\$([^:}]+):([^}]+)\}/);if(p){const[,f,b]=p;f!=="input"&&(n[f]=String(b))}});const i=a.match(/\(\$([^:?]+):(.*?)\)/g);i&&i.forEach(d=>{const p=d.match(/\(\$([^:?]+):(.*?)\)/);if(p){const[,f,b]=p,g=b.split("|").filter(m=>m.trim()!=="");g.length>0&&(n[`class_${f}`]=String(g[0]))}});const s=a.match(/\(\$([^:?]+)\?:(.*?)\)/g);s&&s.forEach(d=>{const p=d.match(/\(\$([^:?]+)\?:(.*?)\)/);if(p){const[,f]=p;n[`class_${f}`]=[]}});const c=a.match(/@for\(\$([^)]+)\):(.*?)@endfor/gs);return c&&c.forEach(d=>{const p=d.match(/@for\(\$([^)]+)\):/);if(p){const[,f]=p;n[f]=[pr(d)]}}),console.log("作成されたコンポーネント:",n),n},pr=r=>{const t={id:xe()},o=r.match(/\{\$([^:}]+):([^}]+)\}/g);o&&o.forEach(a=>{const l=a.match(/\{\$([^:}]+):([^}]+)\}/);if(l){const[,i,s]=l;t[i]=String(s)}});const n=r.match(/\(\$([^:?]+):(.*?)\)/g);return n&&n.forEach(a=>{const l=a.match(/\(\$([^:?]+):(.*?)\)/);if(l){const[,i,s]=l,c=s.split("|").filter(d=>d.trim()!=="");c.length>0&&(t[`class_${i}`]=String(c[0]))}}),t},xe=()=>"comp_"+Math.random().toString(36).substr(2,9)+Date.now().toString(36),W=r=>{let t=r;return t=t.replace(/\{\$image_url:input\}/g,"/assets/img/hero_image.jpg"),t=t.replace(/\{\$image_alt:画像の説明テキスト\}/g,"画像の説明テキスト"),t=t.replace(/\{\$content:ここにテキスト内容を入力してください。複数の段落や書式設定が可能です。\}/g,"<p>ここにテキスト内容を入力してください。複数の段落や書式設定が可能です。</p>"),t=t.replace(/\{\$([^:}]+):([^}]+)\}/g,"$2"),t=t.replace(/\(\$([^:]+):([^|]+)\|[^)]+\)/g,"$2"),t=t.replace(/\(\$[^?]+\?:[^)]+\)/g,""),t=t.replace(/@slot\(\$nested_parts\)@/g,"パーツが入ります"),t=t.replace(/@for\(\$[^)]+\):(.*?)@endfor/gs,"$1"),t},he=()=>{if(!Array.isArray(h.value)||h.value.length===0)return'<div class="no-content">ページにコンテンツがありません</div>';let r='<div class="page-container">';return h.value.forEach((t,o)=>{const{type:n,module_name:a}=t,l=S(n,a);if(!l){r+=`<div class="error-component">テンプレートが見つかりません: ${n}/${a}</div>`;return}let i=l;i=i.replace(/@for\(\$([^)]+)\):([\s\S]*?)@endfor/g,(s,c,d)=>t[c]&&Array.isArray(t[c])?t[c].map(p=>{let f=d;return f=f.replace(/\(\$([^:]+):(.*?)\)/g,(b,g,m)=>{if(p[g]){let C=p[g];return C==="指定無し"&&(C=""),C}const k=`class_${g}`;if(p[k]){let C=p[k];return C==="指定無し"&&(C=""),C}return m.split("|").filter(C=>C.trim())[0]||""}),f=f.replace(/\{\$([^:]+):(.*?)\}/g,(b,g,m)=>p[g]||m),f}).join(""):""),i=i.replace(/\(\$([^:]+):(.*?)\)/g,(s,c,d)=>{const p=`class_${c}`;let f=t[p];return f==="指定無し"&&(f=""),f||d.split("|").filter(g=>g.trim())[0]||""}),i=i.replace(/\(\$([^:?]+)\?:(.*?)\)/g,(s,c,d)=>{const p=`class_${c}`,f=t[p];return Array.isArray(f)?f.join(" "):f||""}),i=i.replace(/\{\$([^:]+):(.*?)\}/g,(s,c,d)=>{const p=`src_${c}`,f=`alt_${c}`,b=`type_${c}`;return t[p]?t[p]:t[f]?t[f]:t[b]?t[b]:t[c]||d}),i=i.replace(/@slot\(\$([^)]+)\)@/g,(s,c)=>t[c]&&Array.isArray(t[c])?ye(t[c]):""),r+=i}),r+="</div>",r},ye=r=>{if(!r||r.length===0)return'<div class="no-nested-content">ネストコンテンツがありません</div>';let t="";return r.forEach(o=>{const n=S(o.type,o.module_name);if(!n){t+=`<div class="error-component">テンプレートが見つかりません: ${o.type}/${o.module_name}</div>`;return}let a=n;a=a.replace(/\(\$([^:]+):(.*?)\)/g,(l,i,s)=>{const c=`class_${i}`;let d=o[c];return d==="指定無し"&&(d=""),d||s.split("|").filter(f=>f.trim())[0]||""}),a=a.replace(/\(\$([^:?]+)\?:(.*?)\)/g,(l,i,s)=>{const c=`class_${i}`,d=o[c];return Array.isArray(d)?d.join(" "):d||""}),a=a.replace(/\{\$([^:]+):(.*?)\}/g,(l,i,s)=>{const c=`src_${i}`,d=`alt_${i}`,p=`type_${i}`;return o[c]?o[c]:o[d]?o[d]:o[p]?o[p]:o[i]||s}),a=a.replace(/@slot\(\$([^)]+)\)@/g,(l,i)=>o[i]&&Array.isArray(o[i])?ye(o[i]):""),t+=a}),t},fr=(r,t)=>{G.value=r,L.value=t,X.value=!0,console.log("ネストパーツ選択モーダルを開く:",{pathString:r,position:t})},ne=()=>{X.value=!1,G.value="",L.value=0},gr=(r,t)=>{const o=ue(r,t),n=K(G.value);let a;if(n.length===0)a=h.value;else{const l=M(h.value,n);if(!l){console.error("親コンポーネントが見つかりません:",n);return}l.nested_parts||(l.nested_parts=[]),a=l.nested_parts}a.splice(L.value,0,o),console.log("ネストパーツを追加:",{path:n,position:L.value,newComponent:o}),ne()},mr=r=>{window.confirm("このパーツを削除しますか？")&&(h.value.splice(r,1),$.value===r&&P())},br=r=>{if(window.confirm("このネストパーツを削除しますか？")){const t=K(r),o=Ro(h.value,t),n=t[t.length-1];o&&o.length>n?(o.splice(n,1),console.log("ネストパーツを削除:",{pathString:r,path:t}),$.value===r&&P()):console.error("削除対象のパーツが見つかりません:",r)}},ke=(r,t)=>{const o=document.createElement("div");o.className="simple-editor-content",o.contentEditable="true",o.innerHTML=r,o.style.cssText=`
      padding: 0;
      border: 2px solid #007bff;
      border-radius: 4px;
      background: white;
      outline: none;
      line-height: 1.5;
    `;let n=null;o.addEventListener("input",()=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{we(o.innerHTML)},500)}),o.addEventListener("paste",()=>{window.setTimeout(()=>{we(o.innerHTML)},200)}),t.innerHTML="",t.appendChild(o),o.focus(),x.value={element:o,getHTML:()=>o.innerHTML,setContent:a=>{o.innerHTML=a},destroy:()=>{o.parentNode&&o.parentNode.removeChild(o)},isActive:a=>document.queryCommandState(a),chain:()=>({focus:()=>({toggleBold:()=>({run:()=>document.execCommand("bold")}),toggleItalic:()=>({run:()=>document.execCommand("italic")}),toggleUnderline:()=>({run:()=>document.execCommand("underline")}),toggleHighlight:()=>({run:()=>document.execCommand("hiliteColor",!1,"#ffeb3b")}),extendMarkRange:()=>({setLink:a=>({run:()=>{const l=window.getSelection();l&&l.toString()&&document.execCommand("createLink",!1,a.href)}})})})}),commands:{focus:()=>o.focus()}}},ur=(r,t)=>{console.log("startTiptapEdit called:",{componentId:r,paramName:t}),console.log("editablePageData:",h.value);const o=r.split("_");console.log("配列アイテム判定:",{componentId:r,parts:o}),console.log("parts詳細:",{length:o.length,parts:o,lastPart:o[o.length-1],secondLastPart:o[o.length-2],thirdLastPart:o[o.length-3],fourthLastPart:o[o.length-4],isSecondLastNumeric:!isNaN(parseInt(o[o.length-2])),isThirdLastNumeric:!isNaN(parseInt(o[o.length-3])),isFourthLastNumeric:!isNaN(parseInt(o[o.length-4]))});let n=!1,a=-1,l="",i="",s="";if(o.length>=4){const d=o[o.length-1],p=o[o.length-2],f=o[o.length-3],b=o[o.length-4];if(isNaN(parseInt(p)))console.log("itemIndexが数値でないため配列アイテムと判定されません:",p);else{console.log("itemIndexが数値と判定:",p),a=parseInt(p);const g=o.length>=5,m=isNaN(parseInt(f)),k=isNaN(parseInt(b));console.log("条件判定:",{condition1:g,condition2:m,condition3:k,allConditions:g&&m&&k}),g&&m&&k?(console.log("複数部分paramNameパターン適用"),l=b,i=`${f}_${d}`,s=o.slice(0,o.length-4).join("_")):(console.log("通常パターン適用"),l=f,i=d,s=o.slice(0,o.length-3).join("_")),n=!0,console.log("配列アイテム解析成功:",{arrayItemIndex:a,arrayItemName:l,arrayParamName:i,arrayParentId:s,parts:o})}}if(console.log("配列アイテム判定結果:",{isArrayItem:n,partsLength:o.length,arrayItemIndex:a,arrayItemName:l,arrayParamName:i,arrayParentId:s}),n){const d=a,p=l,f=s;console.log("配列アイテム編集:",{parentId:f,arrayName:p,itemIndex:d,paramName:t,originalId:r});const b=te(h.value,f);if(!b){console.error("親コンポーネントが見つかりません:",f);return}const g=b.component[p];if(!Array.isArray(g)||!g[d]){console.error("配列アイテムが見つかりません:",{arrayName:p,itemIndex:d});return}const m=g[d];console.log("対象アイテム:",m),w.value={componentId:r,paramName:t,hierarchyPath:b.path,depth:b.path.length,arrayName:p,itemIndex:d},console.log("配列アイテム編集状態を設定:",w.value),e.nextTick(()=>{const k=document.querySelector(`[data-component-id="${r}"][data-param="${t}"]`);if(k){const N=m[t]||"";ke(N,k),x.value&&x.value.commands&&x.value.commands.focus()}});return}const c=te(h.value,r);if(!c){console.error("コンポーネントが見つかりません:",r);return}w.value={componentId:r,paramName:t,hierarchyPath:c.path,depth:c.path.length},console.log("編集状態を設定:",w.value),e.nextTick(()=>{const d=document.querySelector(`[data-component-id="${r}"][data-param="${t}"]`);if(d){const p=c.component[t]||"";ke(p,d),x.value&&x.value.commands&&x.value.commands.focus(),e.nextTick(()=>{xr()})}})},xr=()=>{if(!w.value||!I.value)return;const r=document.querySelector(`[data-component-id="${w.value.componentId}"][data-param="${w.value.paramName}"]`);if(r&&I.value){const t=r.getBoundingClientRect(),o=I.value;o.style.position="absolute",o.style.top=`${t.top-50}px`,o.style.left=`${t.left}px`,o.style.zIndex="1001"}},we=r=>{if(!w.value)return;const{hierarchyPath:t,paramName:o,componentId:n,arrayName:a,itemIndex:l}=w.value;console.log("=== saveTiptapContent デバッグ開始 ==="),console.log("編集中のコンポーネント:",{componentId:n,paramName:o,arrayName:a,itemIndex:l}),console.log("階層パス:",t),console.log("編集内容:",r);let i=r.trim();if(o!=="content"){const c=i.match(/^<p>(.*)<\/p>$/);c&&(i=c[1]),i=i.replace(/<br\s*\/?>$/,"")}if(a!==void 0&&l!==void 0){const c=M(h.value,t);if(c&&c[a]&&Array.isArray(c[a])){const d=c[a][l];if(d){if(console.log("配列アイテム保存:",{arrayName:a,itemIndex:l,paramName:o}),console.log(`保存前の${o}:`,d[o]),d[o]===i){console.log("同じ内容のため保存をスキップしました:",i),console.log("=== saveTiptapContent デバッグ終了（スキップ） ===");return}d[o]=i,console.log(`保存後の${o}:`,d[o])}else console.error("対象の配列アイテムが見つかりません:",{arrayName:a,itemIndex:l})}else console.error("親コンポーネントまたは配列が見つかりません:",{hierarchyPath:t,arrayName:a});console.log("=== saveTiptapContent デバッグ終了（配列アイテム） ===");return}const s=M(h.value,t);if(s){if(console.log("対象コンポーネント見つかりました:",{id:s.id,type:s.type,module_name:s.module_name,階層パス:t}),console.log(`保存前の${o}:`,s[o]),s[o]===i){console.log("同じ内容のため保存をスキップしました:",i),console.log("=== saveTiptapContent デバッグ終了（スキップ） ===");return}s[o]=i,console.log(`保存後の${o}:`,s[o]),console.log("全体データ構造から同一IDのコンポーネントを検索中..."),Ee(h.value,n,[])}else console.error("対象コンポーネントが見つかりません:",{階層パス:t,componentId:n,paramName:o});console.log("=== saveTiptapContent デバッグ終了 ===")},Ee=(r,t,o=[])=>{let n=null;r.forEach((a,l)=>{const i=[...o,l];a.id===t&&(n=a,console.log(`同一ID発見: ${t} at パス [${i.join(", ")}]`,{type:a.type,module_name:a.module_name,パス:i})),a.nested_parts&&Array.isArray(a.nested_parts)&&Ee(a.nested_parts,t,i)}),n&&(console.log(`同じmodule_name(${n.module_name})を持つコンポーネントを検索中...`),_e(h.value,n.module_name,t,[]))},_e=(r,t,o,n=[])=>{r.forEach((a,l)=>{const i=[...n,l];a.module_name===t&&a.id!==o&&console.log(`同じmodule_name発見: ${t} at パス [${i.join(", ")}]`,{id:a.id,type:a.type,module_name:a.module_name,パス:i,heading:a.heading,content:a.content}),a.nested_parts&&Array.isArray(a.nested_parts)&&_e(a.nested_parts,t,o,i)})},ae=()=>{x.value&&(x.value.destroy(),x.value=null),w.value=null,console.log("Tiptap編集を停止しました")},hr=()=>{if(!x.value||!x.value.chain)return;const r=window.prompt("リンクURLを入力してください:");r&&x.value.chain().focus().extendMarkRange("link").setLink({href:r}).run()};e.onMounted(()=>{console.log("MyEditor mounted - 無限階層対応Tiptap機能を初期化中..."),window.startTiptapEdit=ur,window.stopTiptapEdit=ae,window.openNestedEditor=lr,window.openNestedPartSelector=fr,window.deleteNestedPart=br,console.log("無限階層対応グローバル関数を設定しました:",{startTiptapEdit:typeof window.startTiptapEdit,stopTiptapEdit:typeof window.stopTiptapEdit,openNestedEditor:typeof window.openNestedEditor,openNestedPartSelector:typeof window.openNestedPartSelector,deleteNestedPart:typeof window.deleteNestedPart}),document.addEventListener("click",t=>{console.log("クリックイベント発火:",{target:t.target,currentTarget:t.currentTarget,targetType:typeof t.target,targetClassList:t.target&&typeof t.target=="object"&&"classList"in t.target?t.target.classList:"N/A"});const o=t.target;if(o&&typeof o=="object"&&"classList"in o&&o.classList.contains("editable-text")){console.log("editable-textクリック検出");const n=o,a=n.getAttribute("data-component-id"),l=n.getAttribute("data-param");console.log("取得した属性:",{componentId:a,paramName:l}),a&&l&&window.startTiptapEdit?(console.log("startTiptapEdit呼び出し:",a,l),window.startTiptapEdit(a,l)):console.log("startTiptapEdit呼び出し失敗:",{componentId:a,paramName:l,hasFunction:!!window.startTiptapEdit})}else console.log("editable-textではない要素をクリック:",{hasTarget:!!o,targetType:typeof o,hasClassList:o&&typeof o=="object"&&"classList"in o,classList:o&&typeof o=="object"&&"classList"in o?o.classList.toString():"N/A"})}),document.addEventListener("click",t=>{if(!w.value||!t.target)return;const o=t.target;o.closest&&!o.closest(".tiptap-editor-container")&&!o.closest(".editable-text")&&!o.closest(".tiptap-toolbar")&&ae()});const r="my-editor-global-style";if(!document.getElementById(r)){const t=document.createElement("style");t.id=r,t.textContent=`
        /* エディタコンテナ */
        .editor-container { max-width: 1200px; margin: 0 auto; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }

        /* タブナビゲーション */
        .tab-navigation { display: flex; margin-bottom: 30px; background: #f8f9fa; border-radius: 12px; padding: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .tab-button { flex: 1; padding: 16px 24px; background: none; border: none; cursor: pointer; font-size: 16px; font-weight: 600; color: #6c757d; border-radius: 8px; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); position: relative; overflow: hidden; }
        .tab-button::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); opacity: 0; transition: opacity 0.3s ease; z-index: -1; }
        .tab-button:hover { color: #495057; transform: translateY(-1px); }
        .tab-button.active { color: white; background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); box-shadow: 0 4px 15px rgba(102,126,234,0.4); }
        .tab-button.active::before { opacity: 1; }
        .tab-content { min-height: 500px; animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        /* プレビューセクション */
        .preview-section { margin-bottom: 30px; }
        .preview-section h4 { color: #495057; margin-bottom: 20px; font-size: 18px; font-weight: 600; }

        /* レンダリングコンテンツ */
        .rendered-content { border: 2px dashed #e9ecef; border-radius: 12px; padding: 20px; background: #fafbfc; min-height: 200px; }

        /* レンダリングされたコンポーネント */
        .rendered-component { margin-bottom: 20px; border: 1px solid #dee2e6; border-radius: 8px; background: white; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .component-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%); border-bottom: 1px solid #dee2e6; font-size: 12px; color: #6c757d; }
        .component-type { background: #007bff; color: white; padding: 4px 8px; border-radius: 4px; font-weight: 600; }
        .component-module { background: #28a745; color: white; padding: 4px 8px; border-radius: 4px; margin-left: 8px; }
        .component-id { color: #6c757d; margin-left: 8px; }
        .header-actions { display: flex; gap: 8px; }
        .edit-button, .delete-button { padding: 4px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.2s; }
        .edit-button { background: #17a2b8; color: white; }
        .edit-button:hover { background: #138496; }
        .delete-button { background: #dc3545; color: white; }
        .delete-button:hover { background: #c82333; }
        .component-preview { padding: 16px; }

        /* パーツ追加ボタン */
        .add-part-button-container { text-align: center; margin: 16px 0; }
        .add-part-button { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: linear-gradient(135deg,#28a745 0%,#20c997 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; transition: all 0.3s; box-shadow: 0 2px 8px rgba(40,167,69,0.3); }
        .add-part-button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(40,167,69,0.4); }
        .plus-icon { font-size: 18px; font-weight: bold; }
        .button-text { font-size: 14px; }

        /* パーツ選択モーダル */
        .part-selector-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .part-selector-modal { background: white; border-radius: 12px; width: 90%; max-width: 800px; max-height: 80vh; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .part-selector-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid #dee2e6; background: linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%); }
        .part-selector-header h4 { margin: 0; color: #495057; font-size: 18px; font-weight: 600; }
        .close-button { background: none; border: none; font-size: 24px; cursor: pointer; color: #6c757d; padding: 0; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s; }
        .close-button:hover { background: #e9ecef; color: #495057; }
        .part-selector-content { padding: 24px; max-height: 60vh; overflow-y: auto; }
        .parts-list { display: flex; flex-direction: column; gap: 24px; }
        .part-section { border: 1px solid #dee2e6; border-radius: 8px; overflow: hidden; }
        .part-section-title { margin: 0; padding: 16px 20px; background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); color: white; font-size: 16px; font-weight: 600; }
        .modules-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; padding: 20px; }
        .module-card { border: 1px solid #dee2e6; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.3s; background: white; }
        .module-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-color: #007bff; }
        .module-title { font-weight: 600; color: #495057; margin-bottom: 12px; font-size: 14px; }
        .module-preview { color: #6c757d; font-size: 12px; line-height: 1.4; }

        /* Tiptapツールバー */
        .tiptap-toolbar { position: absolute; background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 8px; display: flex; gap: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1001; }
        .toolbar-group { display: flex; gap: 4px; }
        .toolbar-button { padding: 8px 12px; border: 1px solid #dee2e6; background: white; border-radius: 4px; cursor: pointer; font-size: 12px; transition: all 0.2s; }
        .toolbar-button:hover { background: #f8f9fa; }
        .toolbar-button.is-active { background: #007bff; color: white; border-color: #007bff; }
        .save-btn { background: #28a745; color: white; border-color: #28a745; font-weight: 600; }
        .save-btn:hover { background: #218838; }

        /* 編集パネル */
        .editor-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 1000; }
        .editor-sidebar { position: fixed; top: 0; right: 0; width: 400px; height: 100vh; background: white; box-shadow: -2px 0 10px rgba(0,0,0,0.1); overflow-y: auto; animation: slideIn 0.3s ease-out; }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .editor-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid #dee2e6; background: linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%); }
        .editor-header h4 { margin: 0; color: #495057; font-size: 18px; font-weight: 600; }
        .header-buttons { display: flex; gap: 8px; }
        .save-button { padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; }
        .save-button:hover { background: #218838; }
        .editor-content-sidebar { padding: 24px; }
        .editable-component { margin-bottom: 24px; }
        .component-info { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .editor-fields { display: flex; flex-direction: column; gap: 16px; }
        .template-field { border: 1px solid #dee2e6; border-radius: 8px; padding: 16px; background: #f8f9fa; }
        .field-label { display: block; margin-bottom: 8px; font-weight: 600; color: #495057; font-size: 14px; }
        .field-input { width: 100%; padding: 8px 12px; border: 1px solid #ced4da; border-radius: 4px; font-size: 14px; }
        .field-input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 2px rgba(0,123,255,0.25); }
        .radio-group { display: flex; flex-direction: column; gap: 8px; }
        .radio-option { display: flex; align-items: center; gap: 8px; }
        .radio-option input[type="radio"] { margin: 0; }
        .radio-option label { font-size: 14px; color: #495057; cursor: pointer; }
        .checkbox-group { display: flex; flex-direction: column; gap: 8px; }
        .checkbox-option { display: flex; align-items: center; gap: 8px; }
        .checkbox-option input[type="checkbox"] { margin: 0; }
        .checkbox-option label { font-size: 14px; color: #495057; cursor: pointer; }
        .select-field { width: 100%; padding: 8px 12px; border: 1px solid #ced4da; border-radius: 4px; font-size: 14px; background: white; }
        .textarea-field { width: 100%; padding: 8px 12px; border: 1px solid #ced4da; border-radius: 4px; font-size: 14px; resize: vertical; min-height: 80px; }

        /* パーツ管理タブ */
        .parts-management { padding: 20px; }
        .parts-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .parts-header h3 { margin: 0; color: #495057; font-size: 24px; font-weight: 600; }
        .add-part-btn { padding: 12px 24px; background: linear-gradient(135deg,#28a745 0%,#20c997 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; transition: all 0.3s; }
        .add-part-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(40,167,69,0.4); }

        /* 検索・フィルタ */
        .search-filter-section { margin-bottom: 24px; padding: 20px; background: #f8f9fa; border-radius: 12px; border: 1px solid #dee2e6; }
        .search-filter-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .search-filter-header h4 { margin: 0; color: #495057; font-size: 18px; font-weight: 600; }
        .clear-filters-btn { padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; }
        .clear-filters-btn:hover { background: #5a6268; }
        .filter-controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
        .filter-group { display: flex; flex-direction: column; gap: 8px; }
        .filter-group label { font-weight: 600; color: #495057; font-size: 14px; }
        .filter-input { padding: 8px 12px; border: 1px solid #ced4da; border-radius: 4px; font-size: 14px; }
        .filter-input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 2px rgba(0,123,255,0.25); }

        /* パーツ一覧 */
        .parts-list-container { background: white; border-radius: 12px; border: 1px solid #dee2e6; overflow: hidden; }
        .parts-table { width: 100%; border-collapse: collapse; }
        .parts-table th { background: linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%); padding: 16px 12px; text-align: left; font-weight: 600; color: #495057; border-bottom: 2px solid #dee2e6; }
        .parts-table td { padding: 12px; border-bottom: 1px solid #dee2e6; vertical-align: top; }
        .parts-table tr:hover { background: #f8f9fa; }
        .part-type-badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; color: white; }
        .part-type-badge.content { background: #007bff; }
        .part-type-badge.layout { background: #28a745; }
        .part-type-badge.interactive { background: #ffc107; color: #212529; }
        .part-type-badge.media { background: #dc3545; }
        .part-actions { display: flex; gap: 8px; }
        .action-btn { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.2s; }
        .edit-action-btn { background: #17a2b8; color: white; }
        .edit-action-btn:hover { background: #138496; }
        .delete-action-btn { background: #dc3545; color: white; }
        .delete-action-btn:hover { background: #c82333; }

        /* パーツ登録・編集モーダル */
        .part-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(4px); }
        .part-modal { background: white; border-radius: 16px; width: 95%; max-width: 1200px; max-height: 90vh; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); animation: modalSlideIn 0.3s ease-out; }
        @keyframes modalSlideIn { from { opacity: 0; transform: scale(0.9) translateY(-20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        
        .modal-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 24px 32px; border-bottom: 1px solid #e9ecef; background: linear-gradient(135deg,#f8f9fa 0%,#ffffff 100%); }
        .modal-title h3 { margin: 0 0 8px 0; color: #2c3e50; font-size: 24px; font-weight: 700; }
        .modal-subtitle { color: #6c757d; font-size: 14px; margin: 0; }
        .modal-close-btn { background: none; border: none; font-size: 28px; cursor: pointer; color: #6c757d; padding: 8px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s; }
        .modal-close-btn:hover { background: #e9ecef; color: #495057; }
        
        .modal-body { padding: 32px; max-height: 70vh; overflow-y: auto; }
        .form-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        
        .form-section { display: flex; flex-direction: column; gap: 24px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-label { font-weight: 600; color: #2c3e50; font-size: 14px; }
        .form-input, .form-select { width: 100%; padding: 12px 16px; border: 1px solid #ced4da; border-radius: 8px; font-size: 14px; transition: all 0.2s; background: white; }
        .form-input:focus, .form-select:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 3px rgba(0,123,255,0.1); }
        
        .preview-section { display: flex; flex-direction: column; gap: 16px; }
        .preview-header { display: flex; justify-content: space-between; align-items: center; }
        .preview-header h4 { margin: 0; color: #2c3e50; font-size: 18px; font-weight: 600; }
        .preview-info { color: #6c757d; font-size: 12px; }
        .preview-container { border: 1px solid #e9ecef; border-radius: 8px; padding: 16px; background: #f8f9fa; min-height: 300px; }
        .preview-content { min-height: 200px; }
        
        .modal-footer { padding: 24px 32px; border-top: 1px solid #e9ecef; background: #f8f9fa; }
        .modal-actions { display: flex; gap: 12px; justify-content: flex-end; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; transition: all 0.2s; }
        .btn-primary { background: linear-gradient(135deg,#007bff 0%,#0056b3 100%); color: white; }
        .btn-primary:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,123,255,0.3); }
        .btn-primary:disabled { background: #6c757d; cursor: not-allowed; }
        .btn-secondary { background: #6c757d; color: white; }
        .btn-secondary:hover { background: #5a6268; }
        
        /* レスポンシブ対応 */
        @media (max-width: 768px) {
          .form-layout { grid-template-columns: 1fr; gap: 24px; }
          .modal-header { padding: 20px 24px; }
          .modal-body { padding: 24px; }
          .modal-footer { padding: 20px 24px; }
        }

        /* レスポンシブデザイン */
        @media (max-width: 768px) {
          .tab-navigation { flex-direction: column; }
          .tab-button { margin-bottom: 4px; }
          .editor-sidebar { width: 100%; }
          .modules-grid { grid-template-columns: 1fr; }
          .filter-controls { grid-template-columns: 1fr; }
          .parts-table { font-size: 12px; }
          .part-actions { flex-direction: column; }
        }

        /* 編集可能テキスト */
        .editable-text { cursor: pointer; padding: 2px 4px; border-radius: 3px; transition: background-color 0.2s; }
        .editable-text:hover { background-color: rgba(0,123,255,0.1); }
        .editable-text:focus { outline: none; background-color: rgba(0,123,255,0.2); }

        /* Tiptapエディタ */
        .tiptap-editor-container { position: static !important; top: auto !important; left: auto !important; transform: none !important; background: transparent !important; border: none !important; border-radius: 0 !important; padding: 0 !important; box-shadow: none !important; z-index: auto !important; min-width: auto !important; max-width: none !important; }
        .tiptap-editor { border: 1px solid #ced4da; border-radius: 4px; padding: 8px; min-height: 100px; color: #000000 !important; }
        .tiptap-editor:focus { outline: none; border-color: #007bff; }
        .tiptap-editor * { color: #000000 !important; }
        .tiptap-editor button { color: #000000 !important; }
        .tiptap-editor input { color: #000000 !important; }
        .tiptap-editor textarea { color: #000000 !important; }
        
        /* シンプルエディター */
        .simple-editor-content { color: #000000 !important; padding: 0 !important; margin: 0 !important; }
        .simple-editor-content * { color: #000000 !important; }

        /* HTMLエディタ */
        .body-editor-container { border: 1px solid #ced4da; border-radius: 6px; overflow: hidden; }
        .body-editor { width: 100%; min-height: 300px; padding: 12px; border: none; outline: none; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5; resize: vertical; background: #fafafa; }
        .body-editor:focus { outline: none; background: white; }
        .body-editor::placeholder { color: #6c757d; }
        .preview-container { border: 1px solid #ced4da; border-radius: 6px; padding: 12px; background: #f8f9fa; margin-top: 8px; }
        .preview-content { min-height: 100px; }

        /* ページプレビュータブ */
        .page-preview { padding: 20px; }
        .page-preview .preview-header { margin-bottom: 24px; }
        .page-preview .preview-header h4 { margin: 0 0 8px 0; color: #495057; font-size: 24px; font-weight: 600; }
        .page-preview .preview-description { margin: 0; color: #6c757d; font-size: 14px; }
        
        /* プレビュータブ */
        .preview-tabs { display: flex; gap: 8px; margin-bottom: 16px; }
        .preview-tab-button { padding: 8px 16px; border: 1px solid #dee2e6; background: white; border-radius: 6px; cursor: pointer; font-size: 14px; transition: all 0.2s; }
        .preview-tab-button:hover { background: #f8f9fa; }
        .preview-tab-button.active { background: #007bff; color: white; border-color: #007bff; }
        
        .page-preview-content { background: white; border: 1px solid #dee2e6; border-radius: 12px; padding: 24px; min-height: 400px; }
        .html-source { background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 16px; overflow-x: auto; }
        .html-source pre { margin: 0; font-family: 'Courier New', monospace; font-size: 12px; line-height: 1.4; color: #333; }
        .html-source code { background: none; padding: 0; }
        .page-container { max-width: 1200px; margin: 0 auto; }
        .no-content { text-align: center; padding: 40px; color: #6c757d; font-size: 16px; }
        .error-component { background: #f8d7da; color: #721c24; padding: 12px; border: 1px solid #f5c6cb; border-radius: 4px; margin: 8px 0; }
        .no-nested-content { text-align: center; padding: 20px; color: #6c757d; font-size: 14px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px; }

        /* データ表示タブ */
        .data-tabs { display: flex; gap: 8px; margin-bottom: 16px; }
        .data-tab-button { padding: 8px 16px; border: 1px solid #dee2e6; background: white; border-radius: 6px; cursor: pointer; font-size: 14px; transition: all 0.2s; }
        .data-tab-button:hover { background: #f8f9fa; }
        .data-tab-button.active { background: #007bff; color: white; border-color: #007bff; }
        
        .data-content { background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 16px; min-height: 200px; }
      `,document.head.appendChild(t)}});const _=e.ref([]);e.watch(()=>E.parts,r=>{Array.isArray(r)&&(_.value=JSON.parse(JSON.stringify(r)))},{immediate:!0});const ie=r=>{_.value=r,Io("update:parts",r)};return(r,t)=>(e.openBlock(),e.createElementBlock("div",$e,[t[46]||(t[46]=e.createElementVNode("h3",null,"My Editor",-1)),e.createElementVNode("div",Ve,[e.createElementVNode("button",{class:e.normalizeClass(["tab-button",{active:z.value==="editor"}]),onClick:t[0]||(t[0]=o=>Q("editor"))}," エディタ ",2),e.createElementVNode("button",{class:e.normalizeClass(["tab-button",{active:z.value==="preview"}]),onClick:t[1]||(t[1]=o=>Q("preview"))}," ページプレビュー ",2),e.createElementVNode("button",{class:e.normalizeClass(["tab-button",{active:z.value==="parts"}]),onClick:t[2]||(t[2]=o=>Q("parts"))}," パーツ管理 ",2)]),e.createElementVNode("div",Ne,[z.value==="editor"?(e.openBlock(),e.createElementBlock("div",Ce,[e.createElementVNode("div",ve,[e.createElementVNode("div",Be,[e.createElementVNode("button",{class:e.normalizeClass(["data-tab-button",{active:V.value==="rendered"}]),onClick:t[3]||(t[3]=o=>V.value="rendered")}," レンダリング結果 ",2),e.createElementVNode("button",{class:e.normalizeClass(["data-tab-button",{active:V.value==="page"}]),onClick:t[4]||(t[4]=o=>V.value="page")}," Pageデータ ",2),e.createElementVNode("button",{class:e.normalizeClass(["data-tab-button",{active:V.value==="parts"}]),onClick:t[5]||(t[5]=o=>V.value="parts")}," Partsデータ ",2)]),e.createElementVNode("div",ze,[V.value==="rendered"?(e.openBlock(),e.createElementBlock("div",Te,[t[26]||(t[26]=e.createElementVNode("h4",null,"レンダリング結果（要素をクリックして編集）:",-1)),Array.isArray(h.value)&&h.value.length>0?(e.openBlock(),e.createElementBlock("div",Se,[e.createElementVNode("div",Me,[e.createElementVNode("button",{class:"add-part-button",onClick:t[6]||(t[6]=o=>be(0))},t[24]||(t[24]=[e.createElementVNode("span",{class:"plus-icon"},"＋",-1),e.createElementVNode("span",{class:"button-text"},"パーツを追加",-1)]))]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(h.value,(o,n)=>(e.openBlock(),e.createElementBlock("div",{key:o.id||n,class:"rendered-component"},[e.createElementVNode("div",Pe,[e.createElementVNode("span",Ae,e.toDisplayString(o.type),1),e.createElementVNode("span",Le,e.toDisplayString(o.module_name),1),e.createElementVNode("span",De,"ID: "+e.toDisplayString(o.id),1),e.createElementVNode("div",Ie,[e.createElementVNode("button",{class:"edit-button",onClick:a=>ar(n)},"編集",8,je),e.createElementVNode("button",{class:"delete-button",onClick:a=>mr(n)},"削除",8,Fe)])]),e.createElementVNode("div",{class:"component-preview",innerHTML:er(o,n)},null,8,He),e.createElementVNode("div",Ue,[e.createElementVNode("button",{class:"add-part-button",onClick:a=>be(n+1)},t[25]||(t[25]=[e.createElementVNode("span",{class:"plus-icon"},"＋",-1),e.createElementVNode("span",{class:"button-text"},"パーツを追加",-1)]),8,Ke)])]))),128))])):(e.openBlock(),e.createElementBlock("div",Re,"レンダリングするコンテンツがありません"))])):e.createCommentVNode("",!0),V.value==="page"?(e.openBlock(),e.createElementBlock("div",Oe,[t[27]||(t[27]=e.createElementVNode("h4",null,"Pageデータ（リアルタイム更新）:",-1)),e.createElementVNode("pre",null,e.toDisplayString(Wo.value),1)])):e.createCommentVNode("",!0),V.value==="parts"?(e.openBlock(),e.createElementBlock("div",We,[t[28]||(t[28]=e.createElementVNode("h4",null,"Partsデータ:",-1)),Array.isArray(E.parts)&&E.parts.length>0?(e.openBlock(),e.createElementBlock("div",Ye,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(E.parts,(o,n)=>(e.openBlock(),e.createElementBlock("div",{key:n,class:"section-item"},[e.createElementVNode("h5",null,e.toDisplayString(o.type)+" ("+e.toDisplayString(o.module.length)+"個のモジュール)",1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.module,(a,l)=>(e.openBlock(),e.createElementBlock("div",{key:l,class:"module-item"},[e.createElementVNode("h6",null,e.toDisplayString(a.title),1),e.createElementVNode("div",qe,[e.createElementVNode("pre",null,e.toDisplayString(qo(a.body)),1)])]))),128))]))),128))])):(e.openBlock(),e.createElementBlock("pre",Je,e.toDisplayString(Yo.value),1))])):e.createCommentVNode("",!0)])]),q.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:"part-selector-overlay",onClick:re},[e.createElementVNode("div",{class:"part-selector-modal",onClick:t[7]||(t[7]=e.withModifiers(()=>{},["stop"]))},[e.createElementVNode("div",{class:"part-selector-header"},[t[29]||(t[29]=e.createElementVNode("h4",null,"パーツを選択",-1)),e.createElementVNode("button",{class:"close-button",onClick:re},"×")]),e.createElementVNode("div",Xe,[Array.isArray(E.parts)?(e.openBlock(),e.createElementBlock("div",Ge,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(E.parts,(o,n)=>(e.openBlock(),e.createElementBlock("div",{key:n,class:"part-section"},[e.createElementVNode("h5",Qe,e.toDisplayString(o.type),1),e.createElementVNode("div",Ze,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.module,(a,l)=>(e.openBlock(),e.createElementBlock("div",{key:l,class:"module-card",onClick:i=>cr(o.type,a)},[e.createElementVNode("div",tt,e.toDisplayString(a.title),1),e.createElementVNode("div",{class:"module-preview",innerHTML:W(a.body)},null,8,ot)],8,et))),128))])]))),128))])):e.createCommentVNode("",!0)])])])):e.createCommentVNode("",!0),X.value?(e.openBlock(),e.createElementBlock("div",{key:1,class:"part-selector-overlay",onClick:ne},[e.createElementVNode("div",{class:"part-selector-modal",onClick:t[8]||(t[8]=e.withModifiers(()=>{},["stop"]))},[e.createElementVNode("div",{class:"part-selector-header"},[t[30]||(t[30]=e.createElementVNode("h4",null,"ネストパーツを選択",-1)),e.createElementVNode("button",{class:"close-button",onClick:ne},"×")]),e.createElementVNode("div",rt,[Array.isArray(E.parts)?(e.openBlock(),e.createElementBlock("div",nt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(E.parts,(o,n)=>(e.openBlock(),e.createElementBlock("div",{key:n,class:"part-section"},[e.createElementVNode("h5",at,e.toDisplayString(o.type),1),e.createElementVNode("div",it,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.module,(a,l)=>(e.openBlock(),e.createElementBlock("div",{key:l,class:"module-card",onClick:i=>gr(o.type,a)},[e.createElementVNode("div",st,e.toDisplayString(a.title),1),e.createElementVNode("div",{class:"module-preview",innerHTML:W(a.body)},null,8,dt)],8,lt))),128))])]))),128))])):e.createCommentVNode("",!0)])])])):e.createCommentVNode("",!0),w.value&&x.value?(e.openBlock(),e.createElementBlock("div",{key:2,ref_key:"tiptapToolbarRef",ref:I,class:"tiptap-toolbar"},[e.createElementVNode("div",ct,[e.createElementVNode("button",{class:e.normalizeClass([{"is-active":x.value&&x.value.isActive("bold")},"toolbar-button"]),onClick:t[9]||(t[9]=o=>x.value.chain&&x.value.chain().focus().toggleBold().run())},t[31]||(t[31]=[e.createElementVNode("strong",null,"B",-1)]),2),e.createElementVNode("button",{class:e.normalizeClass([{"is-active":x.value&&x.value.isActive("italic")},"toolbar-button"]),onClick:t[10]||(t[10]=o=>x.value.chain&&x.value.chain().focus().toggleItalic().run())},t[32]||(t[32]=[e.createElementVNode("em",null,"I",-1)]),2),e.createElementVNode("button",{class:e.normalizeClass([{"is-active":x.value&&x.value.isActive("underline")},"toolbar-button"]),onClick:t[11]||(t[11]=o=>x.value.chain&&x.value.chain().focus().toggleUnderline().run())},t[33]||(t[33]=[e.createElementVNode("u",null,"U",-1)]),2)]),e.createElementVNode("div",pt,[e.createElementVNode("button",{class:"toolbar-button",onClick:hr},"🔗"),e.createElementVNode("button",{class:e.normalizeClass([{"is-active":x.value&&x.value.isActive("hiliteColor")},"toolbar-button"]),onClick:t[12]||(t[12]=o=>x.value.chain&&x.value.chain().focus().toggleHighlight().run())}," 🖍️ ",2)]),e.createElementVNode("div",{class:"toolbar-group"},[e.createElementVNode("button",{class:"toolbar-button save-btn",onClick:ae},"保存")])],512)):e.createCommentVNode("",!0),A.value&&u.value?(e.openBlock(),e.createElementBlock("div",{key:3,class:"editor-overlay",onClick:P},[e.createElementVNode("div",{class:"editor-sidebar",onClick:t[13]||(t[13]=e.withModifiers(()=>{},["stop"]))},[e.createElementVNode("div",{class:"editor-header"},[t[34]||(t[34]=e.createElementVNode("h4",null,"コンポーネント編集",-1)),e.createElementVNode("div",{class:"header-buttons"},[e.createElementVNode("button",{class:"save-button",onClick:ir},"保存"),e.createElementVNode("button",{class:"close-button",onClick:P},"×")])]),e.createElementVNode("div",ft,[u.value?(e.openBlock(),e.createElementBlock("div",gt,[e.createElementVNode("div",mt,[e.createElementVNode("span",bt,e.toDisplayString(u.value.type),1),e.createElementVNode("span",ut,e.toDisplayString(u.value.module_name),1),e.createElementVNode("span",xt,"ID: "+e.toDisplayString(u.value.id),1)]),e.createElementVNode("div",ht,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(de(u.value),o=>(e.openBlock(),e.createElementBlock("div",{key:o.propKey,class:"template-field"},[e.createElementVNode("label",yt,e.toDisplayString(o.label)+":",1),o.type==="radio"?(e.openBlock(),e.createElementBlock("div",kt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.options,n=>(e.openBlock(),e.createElementBlock("div",{key:n,class:"radio-item"},[e.withDirectives(e.createElementVNode("input",{id:`${u.value.id}_${o.propKey}_${n}`,"onUpdate:modelValue":a=>u.value[o.propKey]=a,value:n,type:"radio",name:`${u.value.id}_${o.propKey}`,class:"radio-input"},null,8,wt),[[e.vModelRadio,u.value[o.propKey]]]),e.createElementVNode("label",{for:`${u.value.id}_${o.propKey}_${n}`,class:"radio-label"},e.toDisplayString(n),9,Et)]))),128))])):e.createCommentVNode("",!0),o.type==="checkbox"?(e.openBlock(),e.createElementBlock("div",_t,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.options,n=>(e.openBlock(),e.createElementBlock("div",{key:n,class:"checkbox-item"},[e.createElementVNode("input",{id:`${u.value.id}_${o.propKey}_${n}`,checked:pe(u.value,o.propKey,n),type:"checkbox",class:"checkbox-input",onChange:a=>ce(u.value,o.propKey,n,a.target.checked)},null,40,$t),e.createElementVNode("label",{for:`${u.value.id}_${o.propKey}_${n}`,class:"checkbox-label"},e.toDisplayString(n),9,Vt)]))),128))])):e.createCommentVNode("",!0)]))),128)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,(o,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:String(n)},[Xo(String(n),o,u.value)?(e.openBlock(),e.createElementBlock("div",Nt,[e.createElementVNode("label",{for:`${u.value.id}_${String(n)}`},e.toDisplayString(n)+":",9,Ct),e.withDirectives(e.createElementVNode("input",{id:`${u.value.id}_${String(n)}`,"onUpdate:modelValue":a=>u.value[String(n)]=a,type:ge(String(n)),class:"field-input",readonly:String(n)==="id"},null,8,vt),[[e.vModelDynamic,u.value[String(n)]]])])):e.createCommentVNode("",!0)],64))),128)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,(o,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:`array_${String(n)}`},[nr(String(n),o,u.value)?(e.openBlock(),e.createElementBlock("div",Bt,[e.createElementVNode("h6",null,e.toDisplayString(n)+":",1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o,(a,l)=>(e.openBlock(),e.createElementBlock("div",{key:a.id||l,class:"array-item"},[e.createElementVNode("div",zt,[e.createElementVNode("span",Tt,e.toDisplayString(a.id||`Item ${l+1}`),1),e.createElementVNode("button",{class:"remove-btn",onClick:i=>Qo(u.value,String(n),l)}," 削除 ",8,St)]),e.createElementVNode("div",Mt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(sr(u.value,String(n)),i=>(e.openBlock(),e.createElementBlock("div",{key:i.propKey,class:"template-field"},[e.createElementVNode("label",Pt,e.toDisplayString(i.label)+":",1),i.type==="radio"?(e.openBlock(),e.createElementBlock("div",At,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(i.options,s=>(e.openBlock(),e.createElementBlock("div",{key:s,class:"radio-item"},[e.withDirectives(e.createElementVNode("input",{id:`${a.id}_${i.propKey}_${s}`,"onUpdate:modelValue":c=>a[i.propKey]=c,value:s,type:"radio",name:`${a.id}_${i.propKey}`,class:"radio-input"},null,8,Lt),[[e.vModelRadio,a[i.propKey]]]),e.createElementVNode("label",{for:`${a.id}_${i.propKey}_${s}`,class:"radio-label"},e.toDisplayString(s),9,Dt)]))),128))])):e.createCommentVNode("",!0),i.type==="checkbox"?(e.openBlock(),e.createElementBlock("div",It,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(i.options,s=>(e.openBlock(),e.createElementBlock("div",{key:s,class:"checkbox-item"},[e.createElementVNode("input",{id:`${a.id}_${i.propKey}_${s}`,checked:pe(a,i.propKey,s),type:"checkbox",class:"checkbox-input",onChange:c=>ce(a,i.propKey,s,c.target.checked)},null,40,jt),e.createElementVNode("label",{for:`${a.id}_${i.propKey}_${s}`,class:"checkbox-label"},e.toDisplayString(s),9,Ft)]))),128))])):e.createCommentVNode("",!0)]))),128)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a,(i,s)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:String(s)},[dr(String(s),i,u.value,String(n))?(e.openBlock(),e.createElementBlock("div",Ht,[e.createElementVNode("label",null,e.toDisplayString(s)+":",1),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":c=>a[String(s)]=c,type:ge(String(s)),class:"field-input"},null,8,Ut),[[e.vModelDynamic,a[String(s)]]])])):e.createCommentVNode("",!0)],64))),128))])]))),128)),e.createElementVNode("button",{class:"add-btn",onClick:a=>Go(u.value,String(n))},e.toDisplayString(n)+"を追加 ",9,Kt)])):e.createCommentVNode("",!0)],64))),128)),u.value.nested_parts&&Array.isArray(u.value.nested_parts)?(e.openBlock(),e.createElementBlock("div",Rt,[t[35]||(t[35]=e.createElementVNode("h6",null,"nested_parts:",-1)),e.createElementVNode("div",Ot," ※ ネストしたコンテンツは"+e.toDisplayString(u.value.nested_parts.length)+"個あります（簡略表示） ",1)])):e.createCommentVNode("",!0)])])):e.createCommentVNode("",!0)])])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:"button-section"},[e.createElementVNode("button",{class:"send-btn page-btn",onClick:or},"Pageデータを送信"),e.createElementVNode("button",{class:"send-btn parts-btn",onClick:rr},"Partsデータを送信"),e.createElementVNode("button",{class:"send-btn reset-btn",onClick:Zo},"リセット")])])):e.createCommentVNode("",!0),z.value==="parts"?(e.openBlock(),e.createElementBlock("div",Wt,[e.createElementVNode("div",Yt,[e.createElementVNode("div",qt,[t[36]||(t[36]=e.createElementVNode("h4",null,"パーツ管理",-1)),e.createElementVNode("button",{class:"add-part-btn",onClick:t[14]||(t[14]=o=>D.value=!0)}," ＋ 新規パーツ登録 ")]),e.createElementVNode("div",Jt,[e.createElementVNode("div",Xt,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[15]||(t[15]=o=>j.value=o),placeholder:"パーツ名で検索...",class:"search-input"},null,512),[[e.vModelText,j.value]])]),e.createElementVNode("div",Gt,[e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":t[16]||(t[16]=o=>F.value=o),class:"filter-select"},[t[37]||(t[37]=e.createElementVNode("option",{value:""},"すべてのType",-1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(ee.value,o=>(e.openBlock(),e.createElementBlock("option",{key:o,value:o},e.toDisplayString(o),9,Qt))),128))],512),[[e.vModelSelect,F.value]])])]),D.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:"part-modal-overlay",onClick:U},[e.createElementVNode("div",{class:"part-modal",onClick:t[21]||(t[21]=e.withModifiers(()=>{},["stop"]))},[e.createElementVNode("div",Zt,[e.createElementVNode("div",eo,[e.createElementVNode("h3",null,e.toDisplayString(v.value?"パーツ編集":"新規パーツ登録"),1),e.createElementVNode("p",to,e.toDisplayString(v.value?"パーツの内容を編集できます":"新しいパーツを作成します"),1)]),e.createElementVNode("button",{class:"modal-close-btn",onClick:U},t[38]||(t[38]=[e.createElementVNode("span",null,"×",-1)]))]),e.createElementVNode("div",oo,[e.createElementVNode("div",ro,[e.createElementVNode("div",no,[v.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",ao,[t[40]||(t[40]=e.createElementVNode("label",{for:"part-type",class:"form-label"},"Type",-1)),e.createElementVNode("div",io,[e.withDirectives(e.createElementVNode("select",{id:"part-type","onUpdate:modelValue":t[17]||(t[17]=o=>y.value.type=o),class:"form-select"},[t[39]||(t[39]=e.createElementVNode("option",{value:""},"新しいTypeを選択",-1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(ee.value,o=>(e.openBlock(),e.createElementBlock("option",{key:o,value:o},e.toDisplayString(o),9,lo))),128))],512),[[e.vModelSelect,y.value.type]]),!y.value.type||!ee.value.includes(y.value.type)?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,"onUpdate:modelValue":t[18]||(t[18]=o=>y.value.type=o),placeholder:"新しいType名を入力",class:"form-input"},null,512)),[[e.vModelText,y.value.type]]):e.createCommentVNode("",!0)])])),v.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",so,[t[41]||(t[41]=e.createElementVNode("label",{for:"part-title",class:"form-label"},"Title",-1)),e.withDirectives(e.createElementVNode("input",{id:"part-title","onUpdate:modelValue":t[19]||(t[19]=o=>y.value.title=o),placeholder:"パーツのタイトルを入力",class:"form-input"},null,512),[[e.vModelText,y.value.title]])])),e.createElementVNode("div",co,[t[42]||(t[42]=e.createElementVNode("label",{for:"part-body",class:"form-label"},"HTML Template",-1)),e.createElementVNode("div",po,[e.withDirectives(e.createElementVNode("textarea",{ref_key:"bodyEditorRef",ref:jo,"onUpdate:modelValue":t[20]||(t[20]=o=>y.value.body=o),class:"body-editor",placeholder:"HTMLソースを直接編集してください...",onInput:Fo},null,544),[[e.vModelText,y.value.body]])])])]),e.createElementVNode("div",fo,[t[43]||(t[43]=e.createElementVNode("div",{class:"preview-header"},[e.createElementVNode("h4",null,"プレビュー"),e.createElementVNode("span",{class:"preview-info"},"リアルタイムで表示を確認")],-1)),e.createElementVNode("div",go,[e.createElementVNode("div",{class:"preview-content",innerHTML:W(y.value.body)},null,8,mo)])])])]),e.createElementVNode("div",bo,[e.createElementVNode("div",uo,[e.createElementVNode("button",{class:"btn btn-secondary",onClick:U}," キャンセル "),e.createElementVNode("button",{class:"btn btn-primary",disabled:!le.value,onClick:Ho},e.toDisplayString(v.value?"更新":"登録"),9,xo)])])])])):e.createCommentVNode("",!0),e.createElementVNode("div",ho,[Array.isArray(Z.value)&&Z.value.length>0?(e.openBlock(),e.createElementBlock("div",yo,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(Z.value,(o,n)=>(e.openBlock(),e.createElementBlock("div",{key:n,class:"part-section"},[e.createElementVNode("div",ko,[e.createElementVNode("h5",null,e.toDisplayString(o.type),1),e.createElementVNode("span",wo,e.toDisplayString(o.module.length)+"個のパーツ",1)]),e.createElementVNode("div",Eo,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.module,(a,l)=>(e.openBlock(),e.createElementBlock("div",{key:l,class:"module-item"},[e.createElementVNode("div",_o,[e.createElementVNode("h6",null,e.toDisplayString(a.title),1),e.createElementVNode("div",$o,[e.createElementVNode("button",{class:"edit-btn",onClick:i=>Uo(n,l)}," 編集 ",8,Vo),e.createElementVNode("button",{class:"delete-btn",onClick:i=>Ko(n,l)}," 削除 ",8,No)])]),e.createElementVNode("div",{class:"module-preview",innerHTML:W(a.body)},null,8,Co)]))),128))])]))),128))])):(e.openBlock(),e.createElementBlock("div",vo,t[44]||(t[44]=[e.createElementVNode("p",null,"登録されたパーツがありません。",-1)])))])])])):e.createCommentVNode("",!0),z.value==="preview"?(e.openBlock(),e.createElementBlock("div",Bo,[e.createElementVNode("div",zo,[t[45]||(t[45]=e.createElementVNode("div",{class:"preview-header"},[e.createElementVNode("h4",null,"ページ全体プレビュー"),e.createElementVNode("p",{class:"preview-description"},"Partsデータを元にPageデータを参照して生成されたHTML")],-1)),e.createElementVNode("div",To,[e.createElementVNode("button",{class:e.normalizeClass(["preview-tab-button",{active:T.value==="rendered"}]),onClick:t[22]||(t[22]=o=>T.value="rendered")}," レンダリング結果 ",2),e.createElementVNode("button",{class:e.normalizeClass(["preview-tab-button",{active:T.value==="source"}]),onClick:t[23]||(t[23]=o=>T.value="source")}," HTMLソース ",2)]),e.createElementVNode("div",So,[T.value==="rendered"?(e.openBlock(),e.createElementBlock("div",{key:0,innerHTML:he()},null,8,Mo)):e.createCommentVNode("",!0),T.value==="source"?(e.openBlock(),e.createElementBlock("div",Po,[e.createElementVNode("pre",null,[e.createElementVNode("code",null,e.toDisplayString(he()),1)])])):e.createCommentVNode("",!0)])])])):e.createCommentVNode("",!0)])]))}}),Y=e.defineCustomElement(Ao,{shadowRoot:!1});customElements.define("my-editor",Y),B.MyEditor=Y,B.default=Y,Object.defineProperties(B,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

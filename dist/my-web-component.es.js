import { defineComponent as _t, ref as C, computed as B, onMounted as je, watch as He, createElementBlock as u, openBlock as f, createElementVNode as a, normalizeClass as M, createCommentVNode as k, Fragment as $, renderList as z, toDisplayString as v, withModifiers as oe, withDirectives as H, vModelRadio as De, vModelDynamic as Ue, vModelText as re, vModelSelect as Fe, nextTick as he, defineCustomElement as $t } from "vue";
const Ct = { class: "editor-container" }, Tt = { class: "tab-navigation" }, zt = { class: "editor-content" }, At = {
  key: 0,
  class: "tab-content"
}, Pt = { class: "data-display" }, Et = { class: "data-tabs" }, Mt = { class: "data-content" }, St = {
  key: 0,
  class: "data-section"
}, Lt = {
  key: 0,
  class: "rendered-content"
}, It = { class: "add-part-button-container" }, jt = { class: "component-header" }, Ht = { class: "component-type" }, Dt = { class: "component-module" }, Ut = { class: "component-id" }, Ft = { class: "header-actions" }, Kt = ["onClick"], Rt = ["onClick"], Ot = ["innerHTML"], Bt = { class: "add-part-button-container" }, Yt = ["onClick"], Wt = {
  key: 1,
  class: "no-data"
}, Nt = {
  key: 1,
  class: "data-section"
}, Vt = {
  key: 2,
  class: "data-section"
}, qt = {
  key: 0,
  class: "parts-display"
}, Jt = { class: "template-code" }, Xt = { key: 1 }, Gt = { class: "part-selector-content" }, Qt = {
  key: 0,
  class: "parts-list"
}, Zt = { class: "part-section-title" }, eo = { class: "modules-grid" }, to = ["onClick"], oo = { class: "module-title" }, ro = ["innerHTML"], no = { class: "part-selector-content" }, ao = {
  key: 0,
  class: "parts-list"
}, io = { class: "part-section-title" }, so = { class: "modules-grid" }, lo = ["onClick"], po = { class: "module-title" }, co = ["innerHTML"], uo = { class: "toolbar-group" }, fo = { class: "toolbar-group" }, bo = { class: "editor-content-sidebar" }, go = {
  key: 0,
  class: "editable-component"
}, xo = { class: "component-info" }, ho = { class: "component-type" }, mo = { class: "component-module" }, vo = { class: "component-id" }, yo = { class: "editor-fields" }, wo = { class: "field-label" }, ko = {
  key: 0,
  class: "radio-group"
}, _o = ["id", "onUpdate:modelValue", "value", "name"], $o = ["for"], Co = {
  key: 1,
  class: "checkbox-group"
}, To = ["id", "checked", "onChange"], zo = ["for"], Ao = {
  key: 0,
  class: "field-group"
}, Po = ["for"], Eo = ["id", "onUpdate:modelValue", "type", "readonly"], Mo = {
  key: 0,
  class: "array-field"
}, So = { class: "item-header" }, Lo = { class: "item-id" }, Io = ["onClick"], jo = { class: "item-fields" }, Ho = { class: "field-label" }, Do = {
  key: 0,
  class: "radio-group"
}, Uo = ["id", "onUpdate:modelValue", "value", "name"], Fo = ["for"], Ko = {
  key: 1,
  class: "checkbox-group"
}, Ro = ["id", "checked", "onChange"], Oo = ["for"], Bo = {
  key: 0,
  class: "field-group"
}, Yo = ["onUpdate:modelValue", "type"], Wo = ["onClick"], No = {
  key: 0,
  class: "nested-content"
}, Vo = { class: "nested-info" }, qo = {
  key: 1,
  class: "tab-content"
}, Jo = { class: "parts-management" }, Xo = { class: "parts-header" }, Go = { class: "search-filter-section" }, Qo = { class: "search-box" }, Zo = { class: "filter-box" }, er = ["value"], tr = { class: "modal-header" }, or = { class: "modal-title" }, rr = { class: "modal-subtitle" }, nr = { class: "modal-body" }, ar = { class: "form-layout" }, ir = { class: "form-section" }, sr = {
  key: 0,
  class: "form-group"
}, lr = { class: "type-input-group" }, dr = ["value"], pr = {
  key: 1,
  class: "form-group"
}, cr = { class: "form-group" }, ur = { class: "body-editor-container" }, fr = { class: "preview-section" }, br = { class: "preview-container" }, gr = ["innerHTML"], xr = { class: "modal-footer" }, hr = { class: "modal-actions" }, mr = ["disabled"], vr = { class: "parts-list-container" }, yr = {
  key: 0,
  class: "parts-grid"
}, wr = { class: "section-header" }, kr = { class: "module-count" }, _r = { class: "modules-list" }, $r = { class: "module-header" }, Cr = { class: "module-actions" }, Tr = ["onClick"], zr = ["onClick"], Ar = ["innerHTML"], Pr = {
  key: 1,
  class: "no-parts"
}, Er = {
  key: 2,
  class: "tab-content"
}, Mr = { class: "page-preview" }, Sr = { class: "preview-tabs" }, Lr = { class: "page-preview-content" }, Ir = ["innerHTML"], jr = {
  key: 1,
  class: "html-source"
}, Hr = /* @__PURE__ */ _t({
  __name: "MyEditor.ce",
  props: {
    parts: { default: () => ({}), type: Object },
    page: { default: () => ({}), type: Object }
  },
  emits: ["update:parts", "update:page"],
  setup(Ke, { emit: Re }) {
    const P = Ke, Oe = Re, w = C([]), S = C(null), m = C(null), Y = C(!1), ne = C(!1), ae = C(0), ie = C(!1), se = C(""), W = C(0), A = C(null), y = C(null), U = C("editor"), F = C("rendered"), L = C("rendered"), le = (o) => {
      U.value = o, o === "editor" ? L.value = "rendered" : o === "preview" && (F.value = "rendered");
    }, N = C(!1), _ = C({
      type: "",
      title: "",
      body: ""
    }), Be = C(null), V = C(null), q = C(""), J = C(""), de = B(() => {
      if (!Array.isArray(E.value)) return [];
      let o = E.value;
      if (J.value && (o = o.filter((e) => e.type === J.value)), q.value.trim()) {
        const e = q.value.toLowerCase();
        o = o.map((t) => ({
          ...t,
          module: t.module.filter(
            (r) => r.title.toLowerCase().includes(e) || r.body.toLowerCase().includes(e)
          )
        })).filter((t) => t.module.length > 0);
      }
      return o;
    }), pe = B(() => Array.isArray(E.value) ? E.value.map((o) => o.type) : []), D = C(!1), X = C(null), me = B(() => (D.value || _.value.type.trim() !== "" && _.value.title.trim() !== "") && _.value.body.trim() !== ""), G = () => {
      N.value = !1, D.value = !1, X.value = null, _.value = {
        type: "",
        title: "",
        body: ""
      };
    }, Ye = (o) => {
      const e = o.target;
      e && (_.value.body = e.value);
    }, We = () => {
      if (me.value) {
        if (D.value && X.value) {
          const { sectionIndex: o, moduleIndex: e } = X.value, t = [...E.value];
          t[o].module[e].body = _.value.body, xe(t), console.log("パーツを更新:", { sectionIndex: o, moduleIndex: e });
        } else {
          const o = Array.isArray(E.value) ? [...E.value] : [];
          let e = o.findIndex((t) => t.type === _.value.type);
          e === -1 && (o.push({
            type: _.value.type,
            module: []
          }), e = o.length - 1), o[e].module.push({
            title: _.value.title,
            body: _.value.body
          }), xe(o), console.log("新しいパーツを登録:", _.value);
        }
        G();
      }
    }, Ne = (o, e) => {
      if (!Array.isArray(E.value)) return;
      const t = E.value[o], r = t.module[e];
      _.value = {
        type: t.type,
        title: r.title,
        body: r.body
      }, D.value = !0, X.value = { sectionIndex: o, moduleIndex: e }, N.value = !0;
    }, Ve = (o, e) => {
      if (Array.isArray(E.value) && window.confirm("このパーツを削除しますか？")) {
        const t = [...E.value];
        t[o].module.splice(e, 1), t[o].module.length === 0 && t.splice(o, 1), xe(t), console.log("パーツを削除:", { sectionIndex: o, moduleIndex: e });
      }
    }, R = (o, e) => {
      if (console.log("findComponentByPath 呼び出し:", { path: e, dataLength: o.length }), e.length === 0)
        return console.log("パスが空のためnullを返します"), null;
      if (e[0] >= o.length)
        return console.log("パス[0]がデータ範囲外:", { path0: e[0], dataLength: o.length }), null;
      let t = o[e[0]];
      console.log("開始コンポーネント:", {
        index: e[0],
        id: t == null ? void 0 : t.id,
        type: t == null ? void 0 : t.type,
        module_name: t == null ? void 0 : t.module_name
      });
      for (let r = 1; r < e.length; r++) {
        if (console.log(`階層${r}への移動: パス[${r}] = ${e[r]}`), !t.nested_parts || !Array.isArray(t.nested_parts))
          return console.log("nested_partsが存在しないかまたは配列ではありません:", t.nested_parts), null;
        if (e[r] >= t.nested_parts.length)
          return console.log("パス[i]がnested_parts範囲外:", {
            pathI: e[r],
            nestedPartsLength: t.nested_parts.length
          }), null;
        t = t.nested_parts[e[r]], console.log(`階層${r}のコンポーネント:`, {
          index: e[r],
          id: t == null ? void 0 : t.id,
          type: t == null ? void 0 : t.type,
          module_name: t == null ? void 0 : t.module_name
        });
      }
      return console.log("最終的に見つかったコンポーネント:", {
        id: t == null ? void 0 : t.id,
        type: t == null ? void 0 : t.type,
        module_name: t == null ? void 0 : t.module_name,
        全パス: e
      }), t;
    }, qe = (o, e) => {
      if (e.length === 1) return o;
      let t = o[e[0]];
      for (let r = 1; r < e.length - 1; r++) {
        if (!t.nested_parts || !Array.isArray(t.nested_parts)) return [];
        t = t.nested_parts[e[r]];
      }
      return t.nested_parts || [];
    }, Q = (o) => o.split("-").map(Number), Z = (o) => o.join("-"), ce = (o, e, t = []) => {
      for (let r = 0; r < o.length; r++) {
        const n = o[r], s = [...t, r];
        if (n.id === e)
          return { component: n, path: s };
        if (n.nested_parts && Array.isArray(n.nested_parts)) {
          const i = ce(n.nested_parts, e, s);
          if (i) return i;
        }
      }
      return null;
    }, ue = (o, e) => {
      const t = `\\{\\$${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:[^}]+\\}`, r = new RegExp(t, "g");
      let n, s = !1;
      for (; (n = r.exec(o)) !== null; ) {
        const i = o.substring(0, n.index), l = o.substring(n.index + n[0].length), p = [
          /\s+\w+\s*=\s*["']?$/,
          // attribute="
          /\s+src\s*=\s*["']?$/,
          // src="
          /\s+alt\s*=\s*["']?$/,
          // alt="
          /\s+type\s*=\s*["']?$/,
          // type="
          /\s+href\s*=\s*["']?$/,
          // href="
          /\s+class\s*=\s*["']?$/,
          // class="
          /\s+id\s*=\s*["']?$/,
          // id="
          /\s+value\s*=\s*["']?$/,
          // value="
          /\s+placeholder\s*=\s*["']?$/,
          // placeholder="
          /\s+title\s*=\s*["']?$/
          // title="
        ], d = [
          /^["']?\s*>/,
          // ">
          /^["']?\s+\w+/,
          // " next-attribute
          /^["']?\s*\w+\s*=/
          // " next-attribute=
        ];
        p.some((b) => b.test(i)) || p.some((b) => b.test(i)) && d.some((b) => b.test(l)) || (s = !0);
      }
      return s;
    }, ve = (o, e, t) => o.replace(/\{\$([^:]+):(.*?)\}/g, (r, n, s) => {
      var b, h;
      const i = `src_${n}`, l = `alt_${n}`, p = `type_${n}`;
      if (e[i]) return e[i];
      if (e[l]) return e[l];
      if (e[p]) return e[p];
      const d = e[n] || s;
      return ue(t, n) ? ((b = A.value) == null ? void 0 : b.componentId) === e.id && ((h = A.value) == null ? void 0 : h.paramName) === n ? `<div class="tiptap-editor-container" data-component-id="${e.id}" data-param="${n}"></div>` : `<span class="editable-text" data-component-id="${e.id}" data-param="${n}" style="cursor: pointer; border-radius: 2px; transition: background-color 0.2s; border: 1px solid transparent;" onmouseover="this.style.backgroundColor='#f0f8ff'; this.style.borderColor='#007bff';" onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='transparent';" onclick="console.log('Tiptap適用(テンプレートベース):', '${e.id}', '${n}'); if(window.startTiptapEdit) window.startTiptapEdit('${e.id}', '${n}'); else console.error('startTiptapEdit関数が見つかりません');">${d}</span>` : d;
    }), Je = () => {
      const o = "my-editor-styles";
      if (document.getElementById(o))
        return;
      const e = `
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
    `, t = document.createElement("style");
      t.id = o, t.textContent = e, document.head.appendChild(t);
    };
    je(() => {
      Je();
    }), He(
      () => P.page,
      (o) => {
        Array.isArray(o) && (w.value = JSON.parse(JSON.stringify(o)));
      },
      { immediate: !0, deep: !0 }
    );
    const ee = (o) => {
      if (Array.isArray(o))
        return o.map((e) => ee(e));
      if (o && typeof o == "object") {
        const e = {};
        for (const [t, r] of Object.entries(o))
          t === "body" && typeof r == "string" ? e[t] = r.replace(/\\n/g, `
`).replace(/\\"/g, '"') : e[t] = ee(r);
        return e;
      }
      return o;
    }, Xe = B(() => {
      const o = w.value.length > 0 ? w.value : P.page, e = ee(o);
      return JSON.stringify(e, null, 2);
    }), Ge = B(() => {
      const o = ee(P.parts);
      return JSON.stringify(o, null, 2);
    }), Qe = (o) => o.replace(/\\n/g, `
`).replace(/\\"/g, '"'), ye = (o) => {
      const e = K(o.type, o.module_name);
      if (!e) return [];
      const t = [], r = e.match(/\(\$([^:?]+):(.*?)\)/g);
      r && r.forEach((s) => {
        const i = s.match(/\(\$([^:?]+):(.*?)\)/);
        if (i) {
          const [, l, p] = i;
          let d = p.split("|");
          d[d.length - 1] === "" && (d = d.slice(0, -1), d.push("指定無し")), d = d.filter((c) => c.trim() !== ""), t.push({
            type: "radio",
            paramName: l,
            propKey: `class_${l}`,
            options: d,
            label: `${l} (ラジオボタン)`
          });
        }
      });
      const n = e.match(/\(\$([^:?]+)\?:(.*?)\)/g);
      return n && n.forEach((s) => {
        const i = s.match(/\(\$([^:?]+)\?:(.*?)\)/);
        if (i) {
          const [, l, p] = i;
          let d = p.split("|");
          d[d.length - 1] === "" && (d = d.slice(0, -1), d.push("指定無し")), d = d.filter((c) => c.trim() !== ""), t.push({
            type: "checkbox",
            paramName: l,
            propKey: `class_${l}`,
            options: d,
            label: `${l} (チェックボックス)`
          });
        }
      }), t;
    }, we = (o, e, t, r) => {
      o[e] || (o[e] = []), r ? o[e].includes(t) || o[e].push(t) : o[e] = o[e].filter((n) => n !== t);
    }, ke = (o, e, t) => Array.isArray(o[e]) && o[e].includes(t), _e = (o, e) => ye(o).some((r) => r.propKey === e), Ze = (o, e) => !!(["content", "cards", "paragraphs"].includes(o) || Array.isArray(e) || typeof e == "object" && e !== null), et = (o, e, t) => o === "id" || o === "type" || o === "module_name" || Ze(o, e) || _e(t, o) || e === "" || e === null || e === void 0 || typeof e == "string" && e.trim() === "" || typeof e == "number" && e === 0 ? !1 : typeof e == "string" && e.trim() !== "" || typeof e == "number" && e !== 0 || typeof e == "boolean", $e = (o) => o.includes("url") || o.includes("src") ? "url" : o.includes("email") ? "email" : o.includes("number") || o.includes("count") ? "number" : "text", tt = (o, e) => {
      o[e] || (o[e] = []);
      const t = { id: `${e}_${Date.now()}` };
      if (o[e].length > 0) {
        const r = o[e][0];
        Object.keys(r).forEach((n) => {
          n !== "id" && (t[n] = typeof r[n] == "string" ? "" : r[n]);
        });
      } else
        e === "paragraphs" ? (t.text = "", t.class_style = "s_normal") : e === "cards" && (t.card_title = "", t.card_desc = "", t.class_card_state = "s_state1");
      o[e].push(t);
    }, ot = (o, e, t) => {
      o[e] && o[e].length > t && o[e].splice(t, 1);
    }, rt = () => {
      Array.isArray(P.page) && (w.value = JSON.parse(JSON.stringify(P.page)));
    }, K = (o, e) => {
      if (!Array.isArray(P.parts)) return "";
      const t = P.parts.find((n) => n.type === o);
      if (!t) return "";
      const r = t.module.find((n) => n.title === e);
      return r ? r.body : "";
    }, nt = (o, e) => {
      const t = K(o.type, o.module_name);
      if (!t)
        return `<div>テンプレートが見つかりません: ${o.type}/${o.module_name}</div>`;
      let r = t;
      return r = r.replace(/@for\(\$([^)]+)\):([\s\S]*?)@endfor/g, (n, s, i) => (console.log("renderComponentWithNested - @for処理開始:", {
        arrayName: s,
        content: i.substring(0, 100) + "..."
      }), o[s] && Array.isArray(o[s]) ? (console.log("renderComponentWithNested - 配列データ発見:", {
        arrayName: s,
        length: o[s].length
      }), o[s].map((l) => {
        console.log("renderComponentWithNested - 配列アイテム処理中:", { item: l, arrayName: s });
        let p = i;
        return p = p.replace(
          /\(\$([^:]+):(.*?)\)/g,
          (d, c, b) => {
            if (l[c]) {
              let x = l[c];
              return x === "指定無し" && (x = ""), x;
            }
            const h = `class_${c}`;
            if (l[h]) {
              let x = l[h];
              return x === "指定無し" && (x = ""), x;
            }
            return b.split("|").filter((x) => x.trim())[0] || "";
          }
        ), p = p.replace(
          /\{\$([^:]+):(.*?)\}/g,
          (d, c, b) => {
            var x, T;
            console.log("renderComponentWithNested - 配列アイテムテキスト置換処理:", {
              paramName: c,
              defaultValue: b,
              itemValue: l[c]
            });
            const h = l[c] || b, g = ue(t, c);
            if (console.log("renderComponentWithNested - 配列アイテムTiptap判定:", {
              paramName: c,
              shouldUseTiptap: g,
              textValue: h
            }), g) {
              const I = `${o.id}_${s}_${o[s].indexOf(l)}_${c.replace(/_/g, "-")}`;
              return console.log("renderComponentWithNested - 配列アイテムTiptap適用:", {
                uniqueItemId: I,
                paramName: c
              }), ((x = A.value) == null ? void 0 : x.componentId) === I && ((T = A.value) == null ? void 0 : T.paramName) === c ? `<div class="tiptap-editor-container" data-component-id="${I}" data-param="${c}"></div>` : `<span class="editable-text" data-component-id="${I}" data-param="${c}" style="cursor: pointer; border-radius: 2px; transition: background-color 0.2s; border: 1px solid transparent;" onmouseover="this.style.backgroundColor='#f0f8ff'; this.style.borderColor='#007bff';" onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='transparent';" onclick="console.log('Tiptap適用(配列アイテム):', '${I}', '${c}'); if(window.startTiptapEdit) window.startTiptapEdit('${I}', '${c}'); else console.error('startTiptapEdit関数が見つかりません');">${h}</span>`;
            }
            return h;
          }
        ), p;
      }).join("")) : "")), r = r.replace(/\(\$([^:]+):(.*?)\)/g, (n, s, i) => {
        const l = `class_${s}`;
        let p = o[l];
        return p === "指定無し" && (p = ""), p || i.split("|").filter((c) => c.trim())[0] || "";
      }), r = r.replace(
        /\(\$([^:?]+)\?:(.*?)\)/g,
        (n, s, i) => {
          const l = `class_${s}`, p = o[l];
          return Array.isArray(p) ? p.join(" ") : p || "";
        }
      ), r = ve(r, o, t), r = r.replace(/@slot\(\$([^)]+)\)@/g, (n, s) => o[s] && Array.isArray(o[s]) ? Ce(o[s], [e]) : ""), r;
    }, Ce = (o, e = []) => {
      if (!o || o.length === 0)
        return `
        <div class="add-nested-part-button-container">
          <button class="add-nested-part-button" onclick="window.openNestedPartSelector('${Z(e)}', 0)">
            <span class="plus-icon">＋</span>
            <span class="button-text">ネストパーツを追加（${e.length + 1}階層目）</span>
          </button>
        </div>
      `;
      let t = "";
      return o.forEach((r, n) => {
        const s = [...e, n], i = Z(s), l = s.length, p = Math.max(0, l - 1) * 16;
        t += `
        <div class="add-nested-part-button-container">
          <button class="add-nested-part-button" onclick="window.openNestedPartSelector('${Z(e)}', ${n})">
            <span class="plus-icon">＋</span>
            <span class="button-text">上にパーツを追加（${e.length + 1}階層目）</span>
          </button>
        </div>
      `, t += `
        <div class="nested-component nested-depth-${l}" style="border: 1px solid #e0e0e0; margin: 8px 0; border-radius: 4px; margin-left: ${p}px;">
          <div class="component-header nested-header" style="background: #f8f9fa; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0;">
            <div>
              <span class="component-type" style="background: #6c757d; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.75rem; margin-right: 8px;">${r.type}</span>
              <span class="component-module" style="color: #495057; font-size: 0.875rem;">${r.module_name}</span>
              <span class="component-id" style="color: #6c757d; font-size: 0.75rem; margin-left: 8px;">ID: ${r.id}</span>
              <span class="depth-indicator" style="color: #6c757d; font-size: 0.75rem; margin-left: 8px;">階層: ${l}</span>
            </div>
            <div class="header-actions">
              <button class="edit-button" onclick="window.openNestedEditor('${i}')" style="background: #007bff; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 0.75rem; margin-right: 4px; cursor: pointer;">編集</button>
              <button class="delete-button" onclick="window.deleteNestedPart('${i}')" style="background: #dc3545; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 0.75rem; cursor: pointer;">削除</button>
            </div>
          </div>
          <div class="nested-component-content" style="padding: 12px;">
            ${at(r)}
          </div>
        </div>
      `, r.nested_parts && Array.isArray(r.nested_parts) && r.nested_parts.length > 0 && (t += Ce(r.nested_parts, s));
      }), t += `
      <div class="add-nested-part-button-container">
        <button class="add-nested-part-button" onclick="window.openNestedPartSelector('${Z(e)}', ${o.length})">
          <span class="plus-icon">＋</span>
          <span class="button-text">下にパーツを追加（${e.length + 1}階層目）</span>
        </button>
      </div>
    `, t;
    }, at = (o) => {
      const e = K(o.type, o.module_name);
      if (!e)
        return `<div>テンプレートが見つかりません: ${o.type}/${o.module_name}</div>`;
      let t = e;
      return t = t.replace(/@for\(\$([^)]+)\):([\s\S]*?)@endfor/g, (r, n, s) => (console.log("renderComponentWithoutSlot - @for処理開始:", {
        arrayName: n,
        content: s.substring(0, 100) + "..."
      }), o[n] && Array.isArray(o[n]) ? (console.log("renderComponentWithoutSlot - 配列データ発見:", {
        arrayName: n,
        length: o[n].length
      }), o[n].map((i) => {
        console.log("renderComponentWithoutSlot - 配列アイテム処理中:", { item: i, arrayName: n });
        let l = s;
        return l = l.replace(
          /\(\$([^:]+):(.*?)\)/g,
          (p, d, c) => {
            if (i[d]) {
              let g = i[d];
              return g === "指定無し" && (g = ""), g;
            }
            const b = `class_${d}`;
            if (i[b]) {
              let g = i[b];
              return g === "指定無し" && (g = ""), g;
            }
            return c.split("|").filter((g) => g.trim())[0] || "";
          }
        ), l = l.replace(
          /\{\$([^:]+):(.*?)\}/g,
          (p, d, c) => {
            var g, x;
            const b = i[d] || c;
            if (ue(e, d)) {
              const T = `${o.id}_${n}_${o[n].indexOf(i)}_${d.replace(/_/g, "-")}`;
              return ((g = A.value) == null ? void 0 : g.componentId) === T && ((x = A.value) == null ? void 0 : x.paramName) === d ? `<div class="tiptap-editor-container" data-component-id="${T}" data-param="${d}"></div>` : `<span class="editable-text" data-component-id="${T}" data-param="${d}" style="cursor: pointer; border-radius: 2px; transition: background-color 0.2s; border: 1px solid transparent;" onmouseover="this.style.backgroundColor='#f0f8ff'; this.style.borderColor='#007bff';" onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='transparent';" onclick="console.log('Tiptap適用(配列アイテム):', '${T}', '${d}'); if(window.startTiptapEdit) window.startTiptapEdit('${T}', '${d}'); else console.error('startTiptapEdit関数が見つかりません');">${b}</span>`;
            }
            return b;
          }
        ), l;
      }).join("")) : "")), t = t.replace(/\(\$([^:]+):(.*?)\)/g, (r, n, s) => {
        const i = `class_${n}`;
        let l = o[i];
        return l === "指定無し" && (l = ""), l || s.split("|").filter((d) => d.trim())[0] || "";
      }), t = t.replace(
        /\(\$([^:?]+)\?:(.*?)\)/g,
        (r, n, s) => {
          const i = `class_${n}`, l = o[i];
          return Array.isArray(l) ? l.join(" ") : l || "";
        }
      ), t = ve(t, o, e), t = t.replace(/@slot\(\$([^)]+)\)@/g, ""), t;
    }, it = () => {
      console.log("sendPageData関数が呼ばれました"), console.log("editablePageData:", w.value);
      const o = {
        data: w.value,
        type: "page",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      console.log("eventData:", o);
      const e = new CustomEvent("dataFromVue", {
        detail: o,
        bubbles: !0
      });
      console.log("Pageデータのイベントを発火します"), document.dispatchEvent(e), console.log("Pageデータのイベントを発火しました");
    }, st = () => {
      console.log("sendPartsData関数が呼ばれました"), console.log("props.parts:", P.parts);
      const o = {
        data: P.parts,
        type: "parts",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      console.log("eventData:", o);
      const e = new CustomEvent("dataFromVue", {
        detail: o,
        bubbles: !0
      });
      console.log("Partsデータのイベントを発火します"), document.dispatchEvent(e), console.log("Partsデータのイベントを発火しました");
    }, lt = (o, e, t) => !Array.isArray(e) || String(o) === "content" || String(o) === "nested_parts" || String(o) === "paragraphs" && t.type === "text" || _e(t, o) || e.length === 0 || e.every((r) => typeof r == "string") ? !1 : e.every((r) => typeof r == "object" && r !== null), dt = (o) => {
      S.value = o, m.value = w.value[o], Y.value = !0;
    }, O = () => {
      S.value = null, m.value = null, Y.value = !1;
    }, pt = () => {
      if (m.value && S.value !== null) {
        if (typeof S.value == "string" && S.value.includes("-")) {
          const o = Q(S.value), e = R(w.value, o);
          e ? (Object.assign(e, m.value), console.log("ネストコンポーネントを保存:", { path: o, component: m.value })) : console.error("保存対象のコンポーネントが見つかりません:", o);
        } else
          w.value[S.value] = {
            ...m.value
          }, console.log("トップレベルコンポーネントを保存:", {
            index: S.value,
            component: m.value
          });
        O();
      }
    }, ct = (o) => {
      const e = Q(o), t = R(w.value, e);
      t ? (m.value = t, S.value = o, Y.value = !0, console.log("ネスト編集を開始:", { pathString: o, path: e, component: t })) : console.error("編集対象のコンポーネントが見つかりません:", o);
    }, ut = (o, e, t) => {
      const r = K(o.type, o.module_name);
      if (!r) return [];
      const n = [], s = new RegExp(`@for\\(\\$${e}\\):(.*?)@endfor`, "s"), i = r.match(s);
      if (i && i[1]) {
        const l = i[1], p = l.match(/\(\$([^:?]+):(.*?)\)/g);
        p && p.forEach((c) => {
          const b = c.match(/\(\$([^:?]+):(.*?)\)/);
          if (b) {
            const [, h, g] = b;
            let x = g.split("|");
            x[x.length - 1] === "" && (x = x.slice(0, -1), x.push("指定無し")), x = x.filter((T) => T.trim() !== ""), n.push({
              type: "radio",
              paramName: h,
              propKey: `class_${h}`,
              options: x,
              label: `${h} (ラジオボタン)`
            });
          }
        });
        const d = l.match(/\(\$([^:?]+)\?:(.*?)\)/g);
        d && d.forEach((c) => {
          const b = c.match(/\(\$([^:?]+)\?:(.*?)\)/);
          if (b) {
            const [, h, g] = b;
            let x = g.split("|");
            x[x.length - 1] === "" && (x = x.slice(0, -1), x.push("指定無し")), x = x.filter((T) => T.trim() !== ""), n.push({
              type: "checkbox",
              paramName: h,
              propKey: `class_${h}`,
              options: x,
              label: `${h} (チェックボックス)`
            });
          }
        });
      }
      return n;
    }, ft = (o, e, t, r, n) => {
      if (o === "id" || Array.isArray(e) || typeof e == "object" && e !== null || e === "" || e === null || e === void 0 || typeof e == "string" && e.trim() === "" || typeof e == "number" && e === 0) return !1;
      const s = K(t.type, t.module_name);
      if (s) {
        const i = new RegExp(`@for\\(\\$${r}\\):(.*?)@endfor`, "s"), l = s.match(i);
        if (l && l[1]) {
          const p = l[1], d = p.match(/\(\$([^:?]+):(.*?)\)/g);
          if (d && d.map((h) => {
            const g = h.match(/\(\$([^:?]+):(.*?)\)/);
            return g ? `class_${g[1]}` : null;
          }).filter(Boolean).includes(o))
            return !1;
          const c = p.match(/\(\$([^:?]+)\?:(.*?)\)/g);
          if (c && c.map((h) => {
            const g = h.match(/\(\$([^:?]+)\?:(.*?)\)/);
            return g ? `class_${g[1]}` : null;
          }).filter(Boolean).includes(o))
            return !1;
        }
      }
      return typeof e == "string" && e.trim() !== "" || typeof e == "number" && e !== 0 || typeof e == "boolean";
    }, Te = (o) => {
      ae.value = o, ne.value = !0;
    }, fe = () => {
      ne.value = !1, ae.value = 0;
    }, bt = (o, e) => {
      const t = ze(o, e);
      w.value.splice(ae.value, 0, t), fe();
    }, ze = (o, e) => {
      const t = Ae();
      console.log("新しいコンポーネントを作成:", { id: t, partType: o, moduleTitle: e.title });
      const r = {
        id: t,
        type: o,
        module_name: e.title
      }, n = e.body, s = n.match(/\{\$([^:}]+):([^}]+)\}/g);
      s && s.forEach((d) => {
        const c = d.match(/\{\$([^:}]+):([^}]+)\}/);
        if (c) {
          const [, b, h] = c;
          b !== "input" && (r[b] = String(h));
        }
      });
      const i = n.match(/\(\$([^:?]+):(.*?)\)/g);
      i && i.forEach((d) => {
        const c = d.match(/\(\$([^:?]+):(.*?)\)/);
        if (c) {
          const [, b, h] = c, g = h.split("|").filter((x) => x.trim() !== "");
          g.length > 0 && (r[`class_${b}`] = String(g[0]));
        }
      });
      const l = n.match(/\(\$([^:?]+)\?:(.*?)\)/g);
      l && l.forEach((d) => {
        const c = d.match(/\(\$([^:?]+)\?:(.*?)\)/);
        if (c) {
          const [, b] = c;
          r[`class_${b}`] = [];
        }
      });
      const p = n.match(/@for\(\$([^)]+)\):(.*?)@endfor/gs);
      return p && p.forEach((d) => {
        const c = d.match(/@for\(\$([^)]+)\):/);
        if (c) {
          const [, b] = c;
          r[b] = [gt(d)];
        }
      }), console.log("作成されたコンポーネント:", r), r;
    }, gt = (o) => {
      const e = {
        id: Ae()
      }, t = o.match(/\{\$([^:}]+):([^}]+)\}/g);
      t && t.forEach((n) => {
        const s = n.match(/\{\$([^:}]+):([^}]+)\}/);
        if (s) {
          const [, i, l] = s;
          e[i] = String(l);
        }
      });
      const r = o.match(/\(\$([^:?]+):(.*?)\)/g);
      return r && r.forEach((n) => {
        const s = n.match(/\(\$([^:?]+):(.*?)\)/);
        if (s) {
          const [, i, l] = s, p = l.split("|").filter((d) => d.trim() !== "");
          p.length > 0 && (e[`class_${i}`] = String(p[0]));
        }
      }), e;
    }, Ae = () => "comp_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36), te = (o) => {
      let e = o;
      return e = e.replace(/\{\$image_url:input\}/g, "/assets/img/hero_image.jpg"), e = e.replace(/\{\$image_alt:画像の説明テキスト\}/g, "画像の説明テキスト"), e = e.replace(
        /\{\$content:ここにテキスト内容を入力してください。複数の段落や書式設定が可能です。\}/g,
        "<p>ここにテキスト内容を入力してください。複数の段落や書式設定が可能です。</p>"
      ), e = e.replace(/\{\$([^:}]+):([^}]+)\}/g, "$2"), e = e.replace(/\(\$([^:]+):([^|]+)\|[^)]+\)/g, "$2"), e = e.replace(/\(\$[^?]+\?:[^)]+\)/g, ""), e = e.replace(/@slot\(\$nested_parts\)@/g, "パーツが入ります"), e = e.replace(/@for\(\$[^)]+\):(.*?)@endfor/gs, "$1"), e;
    }, Pe = () => {
      if (!Array.isArray(w.value) || w.value.length === 0)
        return '<div class="no-content">ページにコンテンツがありません</div>';
      let o = '<div class="page-container">';
      return w.value.forEach((e, t) => {
        const { type: r, module_name: n } = e, s = K(r, n);
        if (!s) {
          o += `<div class="error-component">テンプレートが見つかりません: ${r}/${n}</div>`;
          return;
        }
        let i = s;
        i = i.replace(
          /@for\(\$([^)]+)\):([\s\S]*?)@endfor/g,
          (l, p, d) => e[p] && Array.isArray(e[p]) ? e[p].map((c) => {
            let b = d;
            return b = b.replace(
              /\(\$([^:]+):(.*?)\)/g,
              (h, g, x) => {
                if (c[g]) {
                  let j = c[g];
                  return j === "指定無し" && (j = ""), j;
                }
                const T = `class_${g}`;
                if (c[T]) {
                  let j = c[T];
                  return j === "指定無し" && (j = ""), j;
                }
                return x.split("|").filter((j) => j.trim())[0] || "";
              }
            ), b = b.replace(
              /\{\$([^:]+):(.*?)\}/g,
              (h, g, x) => c[g] || x
            ), b;
          }).join("") : ""
        ), i = i.replace(/\(\$([^:]+):(.*?)\)/g, (l, p, d) => {
          const c = `class_${p}`;
          let b = e[c];
          return b === "指定無し" && (b = ""), b || d.split("|").filter((g) => g.trim())[0] || "";
        }), i = i.replace(
          /\(\$([^:?]+)\?:(.*?)\)/g,
          (l, p, d) => {
            const c = `class_${p}`, b = e[c];
            return Array.isArray(b) ? b.join(" ") : b || "";
          }
        ), i = i.replace(
          /\{\$([^:]+):(.*?)\}/g,
          (l, p, d) => {
            const c = `src_${p}`, b = `alt_${p}`, h = `type_${p}`;
            return e[c] ? e[c] : e[b] ? e[b] : e[h] ? e[h] : e[p] || d;
          }
        ), i = i.replace(/@slot\(\$([^)]+)\)@/g, (l, p) => e[p] && Array.isArray(e[p]) ? Ee(e[p]) : ""), o += i;
      }), o += "</div>", o;
    }, Ee = (o) => {
      if (!o || o.length === 0)
        return '<div class="no-nested-content">ネストコンテンツがありません</div>';
      let e = "";
      return o.forEach((t) => {
        const r = K(t.type, t.module_name);
        if (!r) {
          e += `<div class="error-component">テンプレートが見つかりません: ${t.type}/${t.module_name}</div>`;
          return;
        }
        let n = r;
        n = n.replace(/\(\$([^:]+):(.*?)\)/g, (s, i, l) => {
          const p = `class_${i}`;
          let d = t[p];
          return d === "指定無し" && (d = ""), d || l.split("|").filter((b) => b.trim())[0] || "";
        }), n = n.replace(
          /\(\$([^:?]+)\?:(.*?)\)/g,
          (s, i, l) => {
            const p = `class_${i}`, d = t[p];
            return Array.isArray(d) ? d.join(" ") : d || "";
          }
        ), n = n.replace(
          /\{\$([^:]+):(.*?)\}/g,
          (s, i, l) => {
            const p = `src_${i}`, d = `alt_${i}`, c = `type_${i}`;
            return t[p] ? t[p] : t[d] ? t[d] : t[c] ? t[c] : t[i] || l;
          }
        ), n = n.replace(/@slot\(\$([^)]+)\)@/g, (s, i) => t[i] && Array.isArray(t[i]) ? Ee(t[i]) : ""), e += n;
      }), e;
    }, xt = (o, e) => {
      se.value = o, W.value = e, ie.value = !0, console.log("ネストパーツ選択モーダルを開く:", { pathString: o, position: e });
    }, be = () => {
      ie.value = !1, se.value = "", W.value = 0;
    }, ht = (o, e) => {
      const t = ze(o, e), r = Q(se.value);
      let n;
      if (r.length === 0)
        n = w.value;
      else {
        const s = R(w.value, r);
        if (!s) {
          console.error("親コンポーネントが見つかりません:", r);
          return;
        }
        s.nested_parts || (s.nested_parts = []), n = s.nested_parts;
      }
      n.splice(W.value, 0, t), console.log("ネストパーツを追加:", { path: r, position: W.value, newComponent: t }), be();
    }, mt = (o) => {
      window.confirm("このパーツを削除しますか？") && (w.value.splice(o, 1), S.value === o && O());
    }, vt = (o) => {
      if (window.confirm("このネストパーツを削除しますか？")) {
        const e = Q(o), t = qe(w.value, e), r = e[e.length - 1];
        t && t.length > r ? (t.splice(r, 1), console.log("ネストパーツを削除:", { pathString: o, path: e }), S.value === o && O()) : console.error("削除対象のパーツが見つかりません:", o);
      }
    }, Me = (o, e) => {
      const t = document.createElement("div");
      t.className = "simple-editor-content", t.contentEditable = "true", t.innerHTML = o, t.style.cssText = `
      padding: 0;
      border: 2px solid #007bff;
      border-radius: 4px;
      background: white;
      outline: none;
      line-height: 1.5;
    `;
      let r = null;
      t.addEventListener("input", () => {
        r && window.clearTimeout(r), r = window.setTimeout(() => {
          Se(t.innerHTML);
        }, 500);
      }), t.addEventListener("paste", () => {
        window.setTimeout(() => {
          Se(t.innerHTML);
        }, 200);
      }), e.innerHTML = "", e.appendChild(t), t.focus(), y.value = {
        element: t,
        getHTML: () => t.innerHTML,
        setContent: (n) => {
          t.innerHTML = n;
        },
        destroy: () => {
          t.parentNode && t.parentNode.removeChild(t);
        },
        isActive: (n) => document.queryCommandState(n),
        chain: () => ({
          focus: () => ({
            toggleBold: () => ({ run: () => document.execCommand("bold") }),
            toggleItalic: () => ({ run: () => document.execCommand("italic") }),
            toggleUnderline: () => ({ run: () => document.execCommand("underline") }),
            toggleHighlight: () => ({
              run: () => document.execCommand("hiliteColor", !1, "#ffeb3b")
            }),
            extendMarkRange: () => ({
              setLink: (n) => ({
                run: () => {
                  const s = window.getSelection();
                  s && s.toString() && document.execCommand("createLink", !1, n.href);
                }
              })
            })
          })
        }),
        commands: {
          focus: () => t.focus()
        }
      };
    }, yt = (o, e) => {
      console.log("startTiptapEdit called:", { componentId: o, paramName: e }), console.log("editablePageData:", w.value);
      const t = o.split("_");
      console.log("配列アイテム判定:", { componentId: o, parts: t }), console.log("parts詳細:", {
        length: t.length,
        parts: t,
        lastPart: t[t.length - 1],
        secondLastPart: t[t.length - 2],
        thirdLastPart: t[t.length - 3],
        fourthLastPart: t[t.length - 4],
        isSecondLastNumeric: !isNaN(parseInt(t[t.length - 2])),
        isThirdLastNumeric: !isNaN(parseInt(t[t.length - 3])),
        isFourthLastNumeric: !isNaN(parseInt(t[t.length - 4]))
      });
      let r = !1, n = -1, s = "", i = "", l = "";
      if (t.length >= 4) {
        const d = t[t.length - 1], c = t[t.length - 2], b = t[t.length - 3], h = t[t.length - 4];
        if (isNaN(parseInt(c)))
          console.log("itemIndexが数値でないため配列アイテムと判定されません:", c);
        else {
          console.log("itemIndexが数値と判定:", c), n = parseInt(c);
          const g = t.length >= 5, x = isNaN(parseInt(b)), T = isNaN(parseInt(h));
          console.log("条件判定:", {
            condition1: g,
            condition2: x,
            condition3: T,
            allConditions: g && x && T
          }), g && x && T ? (console.log("複数部分paramNameパターン適用"), s = h, i = `${b}_${d}`, l = t.slice(0, t.length - 4).join("_")) : (console.log("通常パターン適用"), s = b, i = d, l = t.slice(0, t.length - 3).join("_")), r = !0, console.log("配列アイテム解析成功:", {
            arrayItemIndex: n,
            arrayItemName: s,
            arrayParamName: i,
            arrayParentId: l,
            parts: t
          });
        }
      }
      if (console.log("配列アイテム判定結果:", {
        isArrayItem: r,
        partsLength: t.length,
        arrayItemIndex: n,
        arrayItemName: s,
        arrayParamName: i,
        arrayParentId: l
      }), r) {
        const d = n, c = s, b = l;
        console.log("配列アイテム編集:", {
          parentId: b,
          arrayName: c,
          itemIndex: d,
          paramName: e,
          originalId: o
        });
        const h = ce(w.value, b);
        if (!h) {
          console.error("親コンポーネントが見つかりません:", b);
          return;
        }
        const g = h.component[c];
        if (!Array.isArray(g) || !g[d]) {
          console.error("配列アイテムが見つかりません:", { arrayName: c, itemIndex: d });
          return;
        }
        const x = g[d];
        console.log("対象アイテム:", x), A.value = {
          componentId: o,
          paramName: e,
          hierarchyPath: h.path,
          depth: h.path.length,
          arrayName: c,
          itemIndex: d
        }, console.log("配列アイテム編集状態を設定:", A.value), he(() => {
          const T = document.querySelector(
            `[data-component-id="${o}"][data-param="${e}"]`
          );
          if (T) {
            const I = x[e] || "";
            Me(I, T), y.value && y.value.commands && y.value.commands.focus();
          }
        });
        return;
      }
      const p = ce(w.value, o);
      if (!p) {
        console.error("コンポーネントが見つかりません:", o);
        return;
      }
      A.value = {
        componentId: o,
        paramName: e,
        hierarchyPath: p.path,
        depth: p.path.length
      }, console.log("編集状態を設定:", A.value), he(() => {
        const d = document.querySelector(
          `[data-component-id="${o}"][data-param="${e}"]`
        );
        if (d) {
          const c = p.component[e] || "";
          Me(c, d), y.value && y.value.commands && y.value.commands.focus(), he(() => {
            wt();
          });
        }
      });
    }, wt = () => {
      if (!A.value || !V.value) return;
      const o = document.querySelector(
        `[data-component-id="${A.value.componentId}"][data-param="${A.value.paramName}"]`
      );
      if (o && V.value) {
        const e = o.getBoundingClientRect(), t = V.value;
        t.style.position = "absolute", t.style.top = `${e.top - 50}px`, t.style.left = `${e.left}px`, t.style.zIndex = "1001";
      }
    }, Se = (o) => {
      if (!A.value) return;
      const { hierarchyPath: e, paramName: t, componentId: r, arrayName: n, itemIndex: s } = A.value;
      console.log("=== saveTiptapContent デバッグ開始 ==="), console.log("編集中のコンポーネント:", { componentId: r, paramName: t, arrayName: n, itemIndex: s }), console.log("階層パス:", e), console.log("編集内容:", o);
      let i = o.trim();
      if (t !== "content") {
        const p = i.match(/^<p>(.*)<\/p>$/);
        p && (i = p[1]), i = i.replace(/<br\s*\/?>$/, "");
      }
      if (n !== void 0 && s !== void 0) {
        const p = R(w.value, e);
        if (p && p[n] && Array.isArray(p[n])) {
          const d = p[n][s];
          if (d) {
            if (console.log("配列アイテム保存:", { arrayName: n, itemIndex: s, paramName: t }), console.log(`保存前の${t}:`, d[t]), d[t] === i) {
              console.log("同じ内容のため保存をスキップしました:", i), console.log("=== saveTiptapContent デバッグ終了（スキップ） ===");
              return;
            }
            d[t] = i, console.log(`保存後の${t}:`, d[t]);
          } else
            console.error("対象の配列アイテムが見つかりません:", { arrayName: n, itemIndex: s });
        } else
          console.error("親コンポーネントまたは配列が見つかりません:", { hierarchyPath: e, arrayName: n });
        console.log("=== saveTiptapContent デバッグ終了（配列アイテム） ===");
        return;
      }
      const l = R(w.value, e);
      if (l) {
        if (console.log("対象コンポーネント見つかりました:", {
          id: l.id,
          type: l.type,
          module_name: l.module_name,
          階層パス: e
        }), console.log(`保存前の${t}:`, l[t]), l[t] === i) {
          console.log("同じ内容のため保存をスキップしました:", i), console.log("=== saveTiptapContent デバッグ終了（スキップ） ===");
          return;
        }
        l[t] = i, console.log(`保存後の${t}:`, l[t]), console.log("全体データ構造から同一IDのコンポーネントを検索中..."), Le(w.value, r, []);
      } else
        console.error("対象コンポーネントが見つかりません:", {
          階層パス: e,
          componentId: r,
          paramName: t
        });
      console.log("=== saveTiptapContent デバッグ終了 ===");
    }, Le = (o, e, t = []) => {
      let r = null;
      o.forEach((n, s) => {
        const i = [...t, s];
        n.id === e && (r = n, console.log(`同一ID発見: ${e} at パス [${i.join(", ")}]`, {
          type: n.type,
          module_name: n.module_name,
          パス: i
        })), n.nested_parts && Array.isArray(n.nested_parts) && Le(n.nested_parts, e, i);
      }), r && (console.log(`同じmodule_name(${r.module_name})を持つコンポーネントを検索中...`), Ie(w.value, r.module_name, e, []));
    }, Ie = (o, e, t, r = []) => {
      o.forEach((n, s) => {
        const i = [...r, s];
        n.module_name === e && n.id !== t && console.log(`同じmodule_name発見: ${e} at パス [${i.join(", ")}]`, {
          id: n.id,
          type: n.type,
          module_name: n.module_name,
          パス: i,
          heading: n.heading,
          content: n.content
        }), n.nested_parts && Array.isArray(n.nested_parts) && Ie(n.nested_parts, e, t, i);
      });
    }, ge = () => {
      y.value && (y.value.destroy(), y.value = null), A.value = null, console.log("Tiptap編集を停止しました");
    }, kt = () => {
      if (!y.value || !y.value.chain) return;
      const o = window.prompt("リンクURLを入力してください:");
      o && y.value.chain().focus().extendMarkRange("link").setLink({ href: o }).run();
    };
    je(() => {
      console.log("MyEditor mounted - 無限階層対応Tiptap機能を初期化中..."), window.startTiptapEdit = yt, window.stopTiptapEdit = ge, window.openNestedEditor = ct, window.openNestedPartSelector = xt, window.deleteNestedPart = vt, console.log("無限階層対応グローバル関数を設定しました:", {
        startTiptapEdit: typeof window.startTiptapEdit,
        stopTiptapEdit: typeof window.stopTiptapEdit,
        openNestedEditor: typeof window.openNestedEditor,
        openNestedPartSelector: typeof window.openNestedPartSelector,
        deleteNestedPart: typeof window.deleteNestedPart
      }), document.addEventListener("click", (e) => {
        console.log("クリックイベント発火:", {
          target: e.target,
          currentTarget: e.currentTarget,
          targetType: typeof e.target,
          targetClassList: e.target && typeof e.target == "object" && "classList" in e.target ? e.target.classList : "N/A"
        });
        const t = e.target;
        if (t && typeof t == "object" && "classList" in t && t.classList.contains("editable-text")) {
          console.log("editable-textクリック検出");
          const r = t, n = r.getAttribute("data-component-id"), s = r.getAttribute("data-param");
          console.log("取得した属性:", { componentId: n, paramName: s }), n && s && window.startTiptapEdit ? (console.log("startTiptapEdit呼び出し:", n, s), window.startTiptapEdit(n, s)) : console.log("startTiptapEdit呼び出し失敗:", {
            componentId: n,
            paramName: s,
            hasFunction: !!window.startTiptapEdit
          });
        } else
          console.log("editable-textではない要素をクリック:", {
            hasTarget: !!t,
            targetType: typeof t,
            hasClassList: t && typeof t == "object" && "classList" in t,
            classList: t && typeof t == "object" && "classList" in t ? t.classList.toString() : "N/A"
          });
      }), document.addEventListener("click", (e) => {
        if (!A.value || !e.target) return;
        const t = e.target;
        t.closest && !t.closest(".tiptap-editor-container") && !t.closest(".editable-text") && !t.closest(".tiptap-toolbar") && ge();
      });
      const o = "my-editor-global-style";
      if (!document.getElementById(o)) {
        const e = document.createElement("style");
        e.id = o, e.textContent = `
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
      `, document.head.appendChild(e);
      }
    });
    const E = C([]);
    He(
      () => P.parts,
      (o) => {
        Array.isArray(o) && (E.value = JSON.parse(JSON.stringify(o)));
      },
      { immediate: !0 }
    );
    const xe = (o) => {
      E.value = o, Oe("update:parts", o);
    };
    return (o, e) => (f(), u("div", Ct, [
      e[46] || (e[46] = a("h3", null, "My Editor", -1)),
      a("div", Tt, [
        a("button", {
          class: M(["tab-button", { active: U.value === "editor" }]),
          onClick: e[0] || (e[0] = (t) => le("editor"))
        }, " エディタ ", 2),
        a("button", {
          class: M(["tab-button", { active: U.value === "preview" }]),
          onClick: e[1] || (e[1] = (t) => le("preview"))
        }, " ページプレビュー ", 2),
        a("button", {
          class: M(["tab-button", { active: U.value === "parts" }]),
          onClick: e[2] || (e[2] = (t) => le("parts"))
        }, " パーツ管理 ", 2)
      ]),
      a("div", zt, [
        U.value === "editor" ? (f(), u("div", At, [
          a("div", Pt, [
            a("div", Et, [
              a("button", {
                class: M(["data-tab-button", { active: L.value === "rendered" }]),
                onClick: e[3] || (e[3] = (t) => L.value = "rendered")
              }, " レンダリング結果 ", 2),
              a("button", {
                class: M(["data-tab-button", { active: L.value === "page" }]),
                onClick: e[4] || (e[4] = (t) => L.value = "page")
              }, " Pageデータ ", 2),
              a("button", {
                class: M(["data-tab-button", { active: L.value === "parts" }]),
                onClick: e[5] || (e[5] = (t) => L.value = "parts")
              }, " Partsデータ ", 2)
            ]),
            a("div", Mt, [
              L.value === "rendered" ? (f(), u("div", St, [
                e[26] || (e[26] = a("h4", null, "レンダリング結果（要素をクリックして編集）:", -1)),
                Array.isArray(w.value) && w.value.length > 0 ? (f(), u("div", Lt, [
                  a("div", It, [
                    a("button", {
                      class: "add-part-button",
                      onClick: e[6] || (e[6] = (t) => Te(0))
                    }, e[24] || (e[24] = [
                      a("span", { class: "plus-icon" }, "＋", -1),
                      a("span", { class: "button-text" }, "パーツを追加", -1)
                    ]))
                  ]),
                  (f(!0), u($, null, z(w.value, (t, r) => (f(), u("div", {
                    key: t.id || r,
                    class: "rendered-component"
                  }, [
                    a("div", jt, [
                      a("span", Ht, v(t.type), 1),
                      a("span", Dt, v(t.module_name), 1),
                      a("span", Ut, "ID: " + v(t.id), 1),
                      a("div", Ft, [
                        a("button", {
                          class: "edit-button",
                          onClick: (n) => dt(r)
                        }, "編集", 8, Kt),
                        a("button", {
                          class: "delete-button",
                          onClick: (n) => mt(r)
                        }, "削除", 8, Rt)
                      ])
                    ]),
                    a("div", {
                      class: "component-preview",
                      innerHTML: nt(t, r)
                    }, null, 8, Ot),
                    a("div", Bt, [
                      a("button", {
                        class: "add-part-button",
                        onClick: (n) => Te(r + 1)
                      }, e[25] || (e[25] = [
                        a("span", { class: "plus-icon" }, "＋", -1),
                        a("span", { class: "button-text" }, "パーツを追加", -1)
                      ]), 8, Yt)
                    ])
                  ]))), 128))
                ])) : (f(), u("div", Wt, "レンダリングするコンテンツがありません"))
              ])) : k("", !0),
              L.value === "page" ? (f(), u("div", Nt, [
                e[27] || (e[27] = a("h4", null, "Pageデータ（リアルタイム更新）:", -1)),
                a("pre", null, v(Xe.value), 1)
              ])) : k("", !0),
              L.value === "parts" ? (f(), u("div", Vt, [
                e[28] || (e[28] = a("h4", null, "Partsデータ:", -1)),
                Array.isArray(P.parts) && P.parts.length > 0 ? (f(), u("div", qt, [
                  (f(!0), u($, null, z(P.parts, (t, r) => (f(), u("div", {
                    key: r,
                    class: "section-item"
                  }, [
                    a("h5", null, v(t.type) + " (" + v(t.module.length) + "個のモジュール)", 1),
                    (f(!0), u($, null, z(t.module, (n, s) => (f(), u("div", {
                      key: s,
                      class: "module-item"
                    }, [
                      a("h6", null, v(n.title), 1),
                      a("div", Jt, [
                        a("pre", null, v(Qe(n.body)), 1)
                      ])
                    ]))), 128))
                  ]))), 128))
                ])) : (f(), u("pre", Xt, v(Ge.value), 1))
              ])) : k("", !0)
            ])
          ]),
          ne.value ? (f(), u("div", {
            key: 0,
            class: "part-selector-overlay",
            onClick: fe
          }, [
            a("div", {
              class: "part-selector-modal",
              onClick: e[7] || (e[7] = oe(() => {
              }, ["stop"]))
            }, [
              a("div", { class: "part-selector-header" }, [
                e[29] || (e[29] = a("h4", null, "パーツを選択", -1)),
                a("button", {
                  class: "close-button",
                  onClick: fe
                }, "×")
              ]),
              a("div", Gt, [
                Array.isArray(P.parts) ? (f(), u("div", Qt, [
                  (f(!0), u($, null, z(P.parts, (t, r) => (f(), u("div", {
                    key: r,
                    class: "part-section"
                  }, [
                    a("h5", Zt, v(t.type), 1),
                    a("div", eo, [
                      (f(!0), u($, null, z(t.module, (n, s) => (f(), u("div", {
                        key: s,
                        class: "module-card",
                        onClick: (i) => bt(t.type, n)
                      }, [
                        a("div", oo, v(n.title), 1),
                        a("div", {
                          class: "module-preview",
                          innerHTML: te(n.body)
                        }, null, 8, ro)
                      ], 8, to))), 128))
                    ])
                  ]))), 128))
                ])) : k("", !0)
              ])
            ])
          ])) : k("", !0),
          ie.value ? (f(), u("div", {
            key: 1,
            class: "part-selector-overlay",
            onClick: be
          }, [
            a("div", {
              class: "part-selector-modal",
              onClick: e[8] || (e[8] = oe(() => {
              }, ["stop"]))
            }, [
              a("div", { class: "part-selector-header" }, [
                e[30] || (e[30] = a("h4", null, "ネストパーツを選択", -1)),
                a("button", {
                  class: "close-button",
                  onClick: be
                }, "×")
              ]),
              a("div", no, [
                Array.isArray(P.parts) ? (f(), u("div", ao, [
                  (f(!0), u($, null, z(P.parts, (t, r) => (f(), u("div", {
                    key: r,
                    class: "part-section"
                  }, [
                    a("h5", io, v(t.type), 1),
                    a("div", so, [
                      (f(!0), u($, null, z(t.module, (n, s) => (f(), u("div", {
                        key: s,
                        class: "module-card",
                        onClick: (i) => ht(t.type, n)
                      }, [
                        a("div", po, v(n.title), 1),
                        a("div", {
                          class: "module-preview",
                          innerHTML: te(n.body)
                        }, null, 8, co)
                      ], 8, lo))), 128))
                    ])
                  ]))), 128))
                ])) : k("", !0)
              ])
            ])
          ])) : k("", !0),
          A.value && y.value ? (f(), u("div", {
            key: 2,
            ref_key: "tiptapToolbarRef",
            ref: V,
            class: "tiptap-toolbar"
          }, [
            a("div", uo, [
              a("button", {
                class: M([{ "is-active": y.value && y.value.isActive("bold") }, "toolbar-button"]),
                onClick: e[9] || (e[9] = (t) => y.value.chain && y.value.chain().focus().toggleBold().run())
              }, e[31] || (e[31] = [
                a("strong", null, "B", -1)
              ]), 2),
              a("button", {
                class: M([{ "is-active": y.value && y.value.isActive("italic") }, "toolbar-button"]),
                onClick: e[10] || (e[10] = (t) => y.value.chain && y.value.chain().focus().toggleItalic().run())
              }, e[32] || (e[32] = [
                a("em", null, "I", -1)
              ]), 2),
              a("button", {
                class: M([{ "is-active": y.value && y.value.isActive("underline") }, "toolbar-button"]),
                onClick: e[11] || (e[11] = (t) => y.value.chain && y.value.chain().focus().toggleUnderline().run())
              }, e[33] || (e[33] = [
                a("u", null, "U", -1)
              ]), 2)
            ]),
            a("div", fo, [
              a("button", {
                class: "toolbar-button",
                onClick: kt
              }, "🔗"),
              a("button", {
                class: M([{ "is-active": y.value && y.value.isActive("hiliteColor") }, "toolbar-button"]),
                onClick: e[12] || (e[12] = (t) => y.value.chain && y.value.chain().focus().toggleHighlight().run())
              }, " 🖍️ ", 2)
            ]),
            a("div", { class: "toolbar-group" }, [
              a("button", {
                class: "toolbar-button save-btn",
                onClick: ge
              }, "保存")
            ])
          ], 512)) : k("", !0),
          Y.value && m.value ? (f(), u("div", {
            key: 3,
            class: "editor-overlay",
            onClick: O
          }, [
            a("div", {
              class: "editor-sidebar",
              onClick: e[13] || (e[13] = oe(() => {
              }, ["stop"]))
            }, [
              a("div", { class: "editor-header" }, [
                e[34] || (e[34] = a("h4", null, "コンポーネント編集", -1)),
                a("div", { class: "header-buttons" }, [
                  a("button", {
                    class: "save-button",
                    onClick: pt
                  }, "保存"),
                  a("button", {
                    class: "close-button",
                    onClick: O
                  }, "×")
                ])
              ]),
              a("div", bo, [
                m.value ? (f(), u("div", go, [
                  a("div", xo, [
                    a("span", ho, v(m.value.type), 1),
                    a("span", mo, v(m.value.module_name), 1),
                    a("span", vo, "ID: " + v(m.value.id), 1)
                  ]),
                  a("div", yo, [
                    (f(!0), u($, null, z(ye(m.value), (t) => (f(), u("div", {
                      key: t.propKey,
                      class: "template-field"
                    }, [
                      a("label", wo, v(t.label) + ":", 1),
                      t.type === "radio" ? (f(), u("div", ko, [
                        (f(!0), u($, null, z(t.options, (r) => (f(), u("div", {
                          key: r,
                          class: "radio-item"
                        }, [
                          H(a("input", {
                            id: `${m.value.id}_${t.propKey}_${r}`,
                            "onUpdate:modelValue": (n) => m.value[t.propKey] = n,
                            value: r,
                            type: "radio",
                            name: `${m.value.id}_${t.propKey}`,
                            class: "radio-input"
                          }, null, 8, _o), [
                            [De, m.value[t.propKey]]
                          ]),
                          a("label", {
                            for: `${m.value.id}_${t.propKey}_${r}`,
                            class: "radio-label"
                          }, v(r), 9, $o)
                        ]))), 128))
                      ])) : k("", !0),
                      t.type === "checkbox" ? (f(), u("div", Co, [
                        (f(!0), u($, null, z(t.options, (r) => (f(), u("div", {
                          key: r,
                          class: "checkbox-item"
                        }, [
                          a("input", {
                            id: `${m.value.id}_${t.propKey}_${r}`,
                            checked: ke(m.value, t.propKey, r),
                            type: "checkbox",
                            class: "checkbox-input",
                            onChange: (n) => we(
                              m.value,
                              t.propKey,
                              r,
                              n.target.checked
                            )
                          }, null, 40, To),
                          a("label", {
                            for: `${m.value.id}_${t.propKey}_${r}`,
                            class: "checkbox-label"
                          }, v(r), 9, zo)
                        ]))), 128))
                      ])) : k("", !0)
                    ]))), 128)),
                    (f(!0), u($, null, z(m.value, (t, r) => (f(), u($, {
                      key: String(r)
                    }, [
                      et(String(r), t, m.value) ? (f(), u("div", Ao, [
                        a("label", {
                          for: `${m.value.id}_${String(r)}`
                        }, v(r) + ":", 9, Po),
                        H(a("input", {
                          id: `${m.value.id}_${String(r)}`,
                          "onUpdate:modelValue": (n) => m.value[String(r)] = n,
                          type: $e(String(r)),
                          class: "field-input",
                          readonly: String(r) === "id"
                        }, null, 8, Eo), [
                          [Ue, m.value[String(r)]]
                        ])
                      ])) : k("", !0)
                    ], 64))), 128)),
                    (f(!0), u($, null, z(m.value, (t, r) => (f(), u($, {
                      key: `array_${String(r)}`
                    }, [
                      lt(String(r), t, m.value) ? (f(), u("div", Mo, [
                        a("h6", null, v(r) + ":", 1),
                        (f(!0), u($, null, z(t, (n, s) => (f(), u("div", {
                          key: n.id || s,
                          class: "array-item"
                        }, [
                          a("div", So, [
                            a("span", Lo, v(n.id || `Item ${s + 1}`), 1),
                            a("button", {
                              class: "remove-btn",
                              onClick: (i) => ot(m.value, String(r), s)
                            }, " 削除 ", 8, Io)
                          ]),
                          a("div", jo, [
                            (f(!0), u($, null, z(ut(
                              m.value,
                              String(r)
                            ), (i) => (f(), u("div", {
                              key: i.propKey,
                              class: "template-field"
                            }, [
                              a("label", Ho, v(i.label) + ":", 1),
                              i.type === "radio" ? (f(), u("div", Do, [
                                (f(!0), u($, null, z(i.options, (l) => (f(), u("div", {
                                  key: l,
                                  class: "radio-item"
                                }, [
                                  H(a("input", {
                                    id: `${n.id}_${i.propKey}_${l}`,
                                    "onUpdate:modelValue": (p) => n[i.propKey] = p,
                                    value: l,
                                    type: "radio",
                                    name: `${n.id}_${i.propKey}`,
                                    class: "radio-input"
                                  }, null, 8, Uo), [
                                    [De, n[i.propKey]]
                                  ]),
                                  a("label", {
                                    for: `${n.id}_${i.propKey}_${l}`,
                                    class: "radio-label"
                                  }, v(l), 9, Fo)
                                ]))), 128))
                              ])) : k("", !0),
                              i.type === "checkbox" ? (f(), u("div", Ko, [
                                (f(!0), u($, null, z(i.options, (l) => (f(), u("div", {
                                  key: l,
                                  class: "checkbox-item"
                                }, [
                                  a("input", {
                                    id: `${n.id}_${i.propKey}_${l}`,
                                    checked: ke(n, i.propKey, l),
                                    type: "checkbox",
                                    class: "checkbox-input",
                                    onChange: (p) => we(
                                      n,
                                      i.propKey,
                                      l,
                                      p.target.checked
                                    )
                                  }, null, 40, Ro),
                                  a("label", {
                                    for: `${n.id}_${i.propKey}_${l}`,
                                    class: "checkbox-label"
                                  }, v(l), 9, Oo)
                                ]))), 128))
                              ])) : k("", !0)
                            ]))), 128)),
                            (f(!0), u($, null, z(n, (i, l) => (f(), u($, {
                              key: String(l)
                            }, [
                              ft(
                                String(l),
                                i,
                                m.value,
                                String(r)
                              ) ? (f(), u("div", Bo, [
                                a("label", null, v(l) + ":", 1),
                                H(a("input", {
                                  "onUpdate:modelValue": (p) => n[String(l)] = p,
                                  type: $e(String(l)),
                                  class: "field-input"
                                }, null, 8, Yo), [
                                  [Ue, n[String(l)]]
                                ])
                              ])) : k("", !0)
                            ], 64))), 128))
                          ])
                        ]))), 128)),
                        a("button", {
                          class: "add-btn",
                          onClick: (n) => tt(m.value, String(r))
                        }, v(r) + "を追加 ", 9, Wo)
                      ])) : k("", !0)
                    ], 64))), 128)),
                    m.value.nested_parts && Array.isArray(m.value.nested_parts) ? (f(), u("div", No, [
                      e[35] || (e[35] = a("h6", null, "nested_parts:", -1)),
                      a("div", Vo, " ※ ネストしたコンテンツは" + v(m.value.nested_parts.length) + "個あります（簡略表示） ", 1)
                    ])) : k("", !0)
                  ])
                ])) : k("", !0)
              ])
            ])
          ])) : k("", !0),
          a("div", { class: "button-section" }, [
            a("button", {
              class: "send-btn page-btn",
              onClick: it
            }, "Pageデータを送信"),
            a("button", {
              class: "send-btn parts-btn",
              onClick: st
            }, "Partsデータを送信"),
            a("button", {
              class: "send-btn reset-btn",
              onClick: rt
            }, "リセット")
          ])
        ])) : k("", !0),
        U.value === "parts" ? (f(), u("div", qo, [
          a("div", Jo, [
            a("div", Xo, [
              e[36] || (e[36] = a("h4", null, "パーツ管理", -1)),
              a("button", {
                class: "add-part-btn",
                onClick: e[14] || (e[14] = (t) => N.value = !0)
              }, " ＋ 新規パーツ登録 ")
            ]),
            a("div", Go, [
              a("div", Qo, [
                H(a("input", {
                  "onUpdate:modelValue": e[15] || (e[15] = (t) => q.value = t),
                  placeholder: "パーツ名で検索...",
                  class: "search-input"
                }, null, 512), [
                  [re, q.value]
                ])
              ]),
              a("div", Zo, [
                H(a("select", {
                  "onUpdate:modelValue": e[16] || (e[16] = (t) => J.value = t),
                  class: "filter-select"
                }, [
                  e[37] || (e[37] = a("option", { value: "" }, "すべてのType", -1)),
                  (f(!0), u($, null, z(pe.value, (t) => (f(), u("option", {
                    key: t,
                    value: t
                  }, v(t), 9, er))), 128))
                ], 512), [
                  [Fe, J.value]
                ])
              ])
            ]),
            N.value ? (f(), u("div", {
              key: 0,
              class: "part-modal-overlay",
              onClick: G
            }, [
              a("div", {
                class: "part-modal",
                onClick: e[21] || (e[21] = oe(() => {
                }, ["stop"]))
              }, [
                a("div", tr, [
                  a("div", or, [
                    a("h3", null, v(D.value ? "パーツ編集" : "新規パーツ登録"), 1),
                    a("p", rr, v(D.value ? "パーツの内容を編集できます" : "新しいパーツを作成します"), 1)
                  ]),
                  a("button", {
                    class: "modal-close-btn",
                    onClick: G
                  }, e[38] || (e[38] = [
                    a("span", null, "×", -1)
                  ]))
                ]),
                a("div", nr, [
                  a("div", ar, [
                    a("div", ir, [
                      D.value ? k("", !0) : (f(), u("div", sr, [
                        e[40] || (e[40] = a("label", {
                          for: "part-type",
                          class: "form-label"
                        }, "Type", -1)),
                        a("div", lr, [
                          H(a("select", {
                            id: "part-type",
                            "onUpdate:modelValue": e[17] || (e[17] = (t) => _.value.type = t),
                            class: "form-select"
                          }, [
                            e[39] || (e[39] = a("option", { value: "" }, "新しいTypeを選択", -1)),
                            (f(!0), u($, null, z(pe.value, (t) => (f(), u("option", {
                              key: t,
                              value: t
                            }, v(t), 9, dr))), 128))
                          ], 512), [
                            [Fe, _.value.type]
                          ]),
                          !_.value.type || !pe.value.includes(_.value.type) ? H((f(), u("input", {
                            key: 0,
                            "onUpdate:modelValue": e[18] || (e[18] = (t) => _.value.type = t),
                            placeholder: "新しいType名を入力",
                            class: "form-input"
                          }, null, 512)), [
                            [re, _.value.type]
                          ]) : k("", !0)
                        ])
                      ])),
                      D.value ? k("", !0) : (f(), u("div", pr, [
                        e[41] || (e[41] = a("label", {
                          for: "part-title",
                          class: "form-label"
                        }, "Title", -1)),
                        H(a("input", {
                          id: "part-title",
                          "onUpdate:modelValue": e[19] || (e[19] = (t) => _.value.title = t),
                          placeholder: "パーツのタイトルを入力",
                          class: "form-input"
                        }, null, 512), [
                          [re, _.value.title]
                        ])
                      ])),
                      a("div", cr, [
                        e[42] || (e[42] = a("label", {
                          for: "part-body",
                          class: "form-label"
                        }, "HTML Template", -1)),
                        a("div", ur, [
                          H(a("textarea", {
                            ref_key: "bodyEditorRef",
                            ref: Be,
                            "onUpdate:modelValue": e[20] || (e[20] = (t) => _.value.body = t),
                            class: "body-editor",
                            placeholder: "HTMLソースを直接編集してください...",
                            onInput: Ye
                          }, null, 544), [
                            [re, _.value.body]
                          ])
                        ])
                      ])
                    ]),
                    a("div", fr, [
                      e[43] || (e[43] = a("div", { class: "preview-header" }, [
                        a("h4", null, "プレビュー"),
                        a("span", { class: "preview-info" }, "リアルタイムで表示を確認")
                      ], -1)),
                      a("div", br, [
                        a("div", {
                          class: "preview-content",
                          innerHTML: te(_.value.body)
                        }, null, 8, gr)
                      ])
                    ])
                  ])
                ]),
                a("div", xr, [
                  a("div", hr, [
                    a("button", {
                      class: "btn btn-secondary",
                      onClick: G
                    }, " キャンセル "),
                    a("button", {
                      class: "btn btn-primary",
                      disabled: !me.value,
                      onClick: We
                    }, v(D.value ? "更新" : "登録"), 9, mr)
                  ])
                ])
              ])
            ])) : k("", !0),
            a("div", vr, [
              Array.isArray(de.value) && de.value.length > 0 ? (f(), u("div", yr, [
                (f(!0), u($, null, z(de.value, (t, r) => (f(), u("div", {
                  key: r,
                  class: "part-section"
                }, [
                  a("div", wr, [
                    a("h5", null, v(t.type), 1),
                    a("span", kr, v(t.module.length) + "個のパーツ", 1)
                  ]),
                  a("div", _r, [
                    (f(!0), u($, null, z(t.module, (n, s) => (f(), u("div", {
                      key: s,
                      class: "module-item"
                    }, [
                      a("div", $r, [
                        a("h6", null, v(n.title), 1),
                        a("div", Cr, [
                          a("button", {
                            class: "edit-btn",
                            onClick: (i) => Ne(r, s)
                          }, " 編集 ", 8, Tr),
                          a("button", {
                            class: "delete-btn",
                            onClick: (i) => Ve(r, s)
                          }, " 削除 ", 8, zr)
                        ])
                      ]),
                      a("div", {
                        class: "module-preview",
                        innerHTML: te(n.body)
                      }, null, 8, Ar)
                    ]))), 128))
                  ])
                ]))), 128))
              ])) : (f(), u("div", Pr, e[44] || (e[44] = [
                a("p", null, "登録されたパーツがありません。", -1)
              ])))
            ])
          ])
        ])) : k("", !0),
        U.value === "preview" ? (f(), u("div", Er, [
          a("div", Mr, [
            e[45] || (e[45] = a("div", { class: "preview-header" }, [
              a("h4", null, "ページ全体プレビュー"),
              a("p", { class: "preview-description" }, "Partsデータを元にPageデータを参照して生成されたHTML")
            ], -1)),
            a("div", Sr, [
              a("button", {
                class: M(["preview-tab-button", { active: F.value === "rendered" }]),
                onClick: e[22] || (e[22] = (t) => F.value = "rendered")
              }, " レンダリング結果 ", 2),
              a("button", {
                class: M(["preview-tab-button", { active: F.value === "source" }]),
                onClick: e[23] || (e[23] = (t) => F.value = "source")
              }, " HTMLソース ", 2)
            ]),
            a("div", Lr, [
              F.value === "rendered" ? (f(), u("div", {
                key: 0,
                innerHTML: Pe()
              }, null, 8, Ir)) : k("", !0),
              F.value === "source" ? (f(), u("div", jr, [
                a("pre", null, [
                  a("code", null, v(Pe()), 1)
                ])
              ])) : k("", !0)
            ])
          ])
        ])) : k("", !0)
      ])
    ]));
  }
}), Dr = $t(Hr, {
  shadowRoot: !1
});
customElements.define("my-editor", Dr);
export {
  Dr as MyEditor,
  Dr as default
};

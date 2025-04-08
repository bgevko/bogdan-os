import {
  e as O,
  m as A,
  f as D,
  c as m,
  o as d,
  F as N,
  p as B,
  W as M,
  a as s,
  v as P,
  U as R,
  d as x,
  t as y,
  n as C,
  X as L,
  i as k,
  D as f,
  A as o,
  r as j,
  I as G,
  b as V,
  O as z,
  s as a,
  w as F,
  l as T,
  k as c,
  Y as E,
  H as _,
} from './CTNqAv02.js';
import { F as I, d as W, a as q } from './BupVbMfq.js';
import { g as U } from './KJnl7Sfk.js';
const H = { flex: '~ inline gap-1 wrap', 'of-hidden': '', 'text-sm': '' },
  X = ['title'],
  Y = ['value', 'title'],
  J = O({
    __name: 'OptionSelectGroup',
    props: A(
      { options: {}, titles: {}, classes: {}, props: {} },
      { modelValue: { type: [String, Number] }, modelModifiers: {} },
    ),
    emits: ['update:modelValue'],
    setup($) {
      const v = D($, 'modelValue');
      return (n, b) => (
        d(),
        m('fieldset', H, [
          (d(!0),
          m(
            N,
            null,
            B(n.options, (g, i) => {
              var h, w, t, e, r, u, S, l;
              return (
                d(),
                m(
                  'label',
                  M(
                    {
                      key: g,
                      border: '~ base rounded-full',
                      relative: '',
                      'hover:bg-hover': '',
                      'px2.5': '',
                      'py0.5': '',
                      class: [
                        g === v.value ? 'bg-active' : 'saturate-0 hover:saturate-100',
                        ((w = (h = n.props) == null ? void 0 : h[i]) == null ? void 0 : w.class) ||
                          '',
                      ],
                      ref_for: !0,
                    },
                    (t = n.props) == null ? void 0 : t[i],
                    { title: (e = n.titles) == null ? void 0 : e[i] },
                  ),
                  [
                    s(
                      'div',
                      {
                        class: C([
                          g === v.value ? '' : 'op50',
                          (r = n.titles) != null && r[i] ? '' : 'capitalize',
                          ((u = n.classes) == null ? void 0 : u[i]) || '',
                        ]),
                      },
                      [
                        R(
                          n.$slots,
                          'default',
                          { value: g, title: (S = n.titles) == null ? void 0 : S[i], index: i },
                          () => {
                            var p;
                            return [x(y(((p = n.titles) == null ? void 0 : p[i]) ?? g), 1)];
                          },
                        ),
                      ],
                      2,
                    ),
                    P(
                      s(
                        'input',
                        {
                          'onUpdate:modelValue': b[0] || (b[0] = (p) => (v.value = p)),
                          type: 'radio',
                          value: g,
                          title: (l = n.titles) == null ? void 0 : l[i],
                          absolute: '',
                          'inset-0': '',
                          'op-0.1': '',
                        },
                        null,
                        8,
                        Y,
                      ),
                      [[L, v.value]],
                    ),
                  ],
                  16,
                  X,
                )
              );
            }),
            128,
          )),
        ])
      );
    },
  }),
  K = { py4: '', flex: '~ col gap-2' },
  Q = { relative: '', flex: '' },
  Z = { grid: '~ cols-[max-content_1fr] gap-2', my2: '', 'items-center': '' },
  ee = { class: 'flex items-center' },
  te = { 'ml--1': '', 'mr-1': '', flex: '', 'items-center': '' },
  le = { flex: '', 'items-center': '', 'gap-1': '' },
  oe = { key: 0, 'i-ph-check-square-duotone': '', 'ml--0.5': '', 'text-green': '' },
  se = { key: 1, 'i-ph-wrench-duotone': '', 'ml--0.5': '', 'text-amber': '' },
  re = { key: 2, 'i-ph-prohibit-inset-duotone': '', 'ml--1': '', 'text-gray': '' },
  ae = { 'items-center': '', 'justify-between': '', 'gap-2': '', 'md:flex': '' },
  ne = { flex: '~ gap-2', 'lt-sm:flex-col': '' },
  ie = {
    flex: '~ inline gap-2 items-center',
    border: '~ gray/20 rounded-full',
    'bg-gray:10': '',
    px3: '',
    py1: '',
  },
  ue = { op75: '' },
  de = { 'text-sm': '', op50: '' },
  pe = { key: 0, flex: '~ gap-1' },
  ge = O({
    __name: 'rules',
    setup($) {
      const v = k(() => Object.values(f.value.rules)),
        n = k(() => Array.from(new Set(v.value.map((t) => t.plugin))).filter(Boolean)),
        b = k(() => {
          let t = v.value;
          switch (
            (o.plugin && (t = t.filter((e) => e.plugin === o.plugin)),
            o.fixable != null && (t = t.filter((e) => !!e.fixable === o.fixable)),
            o.state)
          ) {
            case 'using':
              t = t.filter((e) => f.value.ruleToState.get(e.name));
              break;
            case 'unused':
              t = t.filter((e) => !f.value.ruleToState.get(e.name));
              break;
            case 'overloads':
              t = t.filter((e) => {
                var r;
                return (
                  (((r = f.value.ruleToState.get(e.name)) == null ? void 0 : r.length) || 0) > 1
                );
              });
              break;
            case 'error':
              t = t.filter((e) => {
                var r;
                return (r = f.value.ruleToState.get(e.name)) == null
                  ? void 0
                  : r.some((u) => u.level === 'error');
              });
              break;
            case 'warn':
              t = t.filter((e) => {
                var r;
                return (r = f.value.ruleToState.get(e.name)) == null
                  ? void 0
                  : r.some((u) => u.level === 'warn');
              });
              break;
            case 'off':
              t = t.filter((e) => {
                var r;
                return (r = f.value.ruleToState.get(e.name)) == null
                  ? void 0
                  : r.some((u) => u.level === 'off');
              });
              break;
            case 'off-only':
              t = t.filter((e) => {
                const r = f.value.ruleToState.get(e.name);
                return r != null && r.length ? r.every((u) => u.level === 'off') : !1;
              });
              break;
          }
          switch (o.status) {
            case 'active':
              t = t.filter((e) => !e.deprecated);
              break;
            case 'recommended':
              t = t.filter((e) => {
                var r;
                return (r = e.docs) == null ? void 0 : r.recommended;
              });
              break;
            case 'fixable':
              t = t.filter((e) => e.fixable);
              break;
            case 'deprecated':
              t = t.filter((e) => e.deprecated);
              break;
          }
          return t;
        }),
        g = k(() => new I(b.value, { keys: ['name', 'docs.description'], threshold: 0.5 })),
        i = j(b.value);
      G(
        () => [o.search, b.value],
        () => {
          if (!o.search) return (i.value = b.value);
          i.value = g.value.search(o.search).map((t) => t.item);
        },
        { debounce: 200 },
      );
      const h = k(() => !(o.search || o.plugin || o.state !== 'using' || o.status !== 'active'));
      function w() {
        (o.search = ''), (o.plugin = ''), (o.state = 'using'), (o.status = 'active');
      }
      return (t, e) => {
        const r = J,
          u = W,
          S = q;
        return (
          d(),
          m('div', null, [
            s('div', K, [
              s('div', Q, [
                P(
                  s(
                    'input',
                    {
                      'onUpdate:modelValue': e[0] || (e[0] = (l) => (a(o).search = l)),
                      class: C(a(o).search ? 'font-mono' : ''),
                      placeholder: 'Search rules...',
                      border: '~ base rounded-full',
                      'w-full': '',
                      'bg-transparent': '',
                      px3: '',
                      py2: '',
                      pl10: '',
                      'outline-none': '',
                    },
                    null,
                    2,
                  ),
                  [[z, a(o).search]],
                ),
                e[7] ||
                  (e[7] = s(
                    'div',
                    {
                      absolute: '',
                      'bottom-0': '',
                      'left-0': '',
                      'top-0': '',
                      flex: '~ items-center justify-center',
                      p4: '',
                      op50: '',
                    },
                    [s('div', { 'i-ph-magnifying-glass-duotone': '' })],
                    -1,
                  )),
              ]),
              s('div', Z, [
                e[8] ||
                  (e[8] = s('div', { 'text-right': '', 'text-sm': '', op50: '' }, ' Plugins ', -1)),
                V(
                  r,
                  {
                    modelValue: a(o).plugin,
                    'onUpdate:modelValue': e[1] || (e[1] = (l) => (a(o).plugin = l)),
                    options: ['', ...n.value],
                    titles: ['All', ...n.value],
                    props: [
                      {},
                      ...n.value.map((l) => ({
                        class: 'font-mono',
                        style:
                          a(o).plugin === l
                            ? {
                                color: ('getPluginColor' in t ? t.getPluginColor : a(U))(l),
                                backgroundColor: ('getPluginColor' in t ? t.getPluginColor : a(U))(
                                  l,
                                  0.1,
                                ),
                              }
                            : {},
                      })),
                    ],
                  },
                  null,
                  8,
                  ['modelValue', 'options', 'titles', 'props'],
                ),
                e[9] ||
                  (e[9] = s('div', { 'text-right': '', 'text-sm': '', op50: '' }, ' Usage ', -1)),
                V(
                  r,
                  {
                    modelValue: a(o).state,
                    'onUpdate:modelValue': e[2] || (e[2] = (l) => (a(o).state = l)),
                    options: [
                      '',
                      'using',
                      'unused',
                      'error',
                      'warn',
                      'off',
                      'overloads',
                      'off-only',
                    ],
                    titles: [
                      'All',
                      'Using',
                      'Unused',
                      'Error',
                      'Warn',
                      'Off',
                      'Overloaded',
                      'Off Only',
                    ],
                  },
                  {
                    default: F(({ value: l, title: p }) => [
                      s('div', ee, [
                        s('div', te, [
                          l === 'error' || l === 'overloads'
                            ? (d(), T(u, { key: 0, level: 'error' }))
                            : c('', !0),
                          l === 'warn' || l === 'overloads'
                            ? (d(), T(u, { key: 1, level: 'warn' }))
                            : c('', !0),
                          l === 'off' || l === 'off-only' || l === 'overloads'
                            ? (d(), T(u, { key: 2, level: 'off' }))
                            : c('', !0),
                        ]),
                        x(' ' + y(p || l), 1),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modelValue'],
                ),
                e[10] ||
                  (e[10] = s('div', { 'text-right': '', 'text-sm': '', op50: '' }, ' State ', -1)),
                V(
                  r,
                  {
                    modelValue: a(o).status,
                    'onUpdate:modelValue': e[3] || (e[3] = (l) => (a(o).status = l)),
                    options: ['', 'active', 'recommended', 'fixable', 'deprecated'],
                    titles: ['All', 'Active', 'Recommended', 'Fixable', 'Deprecated'],
                  },
                  {
                    default: F(({ value: l, title: p }) => [
                      s('div', le, [
                        l === 'recommended' ? (d(), m('div', oe)) : c('', !0),
                        l === 'fixable' ? (d(), m('div', se)) : c('', !0),
                        l === 'deprecated' ? (d(), m('div', re)) : c('', !0),
                        x(' ' + y(p || l), 1),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modelValue'],
                ),
              ]),
            ]),
            s('div', ae, [
              s('div', ne, [
                s('div', ie, [
                  e[11] || (e[11] = s('div', { 'i-ph-list-checks-duotone': '' }, null, -1)),
                  s('span', null, y(i.value.length), 1),
                  s('span', ue, 'rules ' + y(h.value ? 'enabled' : 'filtered'), 1),
                  s('span', de, 'out of ' + y(v.value.length) + ' rules', 1),
                ]),
                h.value
                  ? c('', !0)
                  : (d(),
                    m(
                      'button',
                      {
                        key: 0,
                        flex: '~ inline gap-2 items-center self-start',
                        border: '~ purple/20 rounded-full',
                        'bg-purple:10': '',
                        px3: '',
                        py1: '',
                        onClick: e[4] || (e[4] = (l) => w()),
                      },
                      e[12] ||
                        (e[12] = [
                          s('div', { 'i-ph-funnel-duotone': '', 'text-purple': '' }, null, -1),
                          s('span', { op50: '' }, 'Clear Filter', -1),
                          s(
                            'div',
                            {
                              'i-ph-x': '',
                              'ml--1': '',
                              'text-sm': '',
                              op25: '',
                              'hover:op100': '',
                            },
                            null,
                            -1,
                          ),
                        ]),
                    )),
              ]),
              a(E)
                ? c('', !0)
                : (d(),
                  m('div', pe, [
                    s(
                      'button',
                      {
                        'btn-action': '',
                        class: C({ 'btn-action-active': a(_).viewType === 'list' }),
                        onClick: e[5] || (e[5] = (l) => (a(_).viewType = 'list')),
                      },
                      e[13] ||
                        (e[13] = [s('div', { 'i-ph-list-duotone': '' }, null, -1), x(' List ')]),
                      2,
                    ),
                    s(
                      'button',
                      {
                        'btn-action': '',
                        class: C({ 'btn-action-active': a(_).viewType === 'grid' }),
                        onClick: e[6] || (e[6] = (l) => (a(_).viewType = 'grid')),
                      },
                      e[14] ||
                        (e[14] = [
                          s('div', { 'i-ph-grid-four-duotone': '' }, null, -1),
                          x(' Grid '),
                        ]),
                      2,
                    ),
                  ])),
            ]),
            V(
              S,
              {
                my4: '',
                rules: i.value,
                'get-bind': (l) => {
                  var p;
                  return {
                    class:
                      ((p = a(f).ruleToState.get(l)) != null && p.length) || a(o).state === 'unused'
                        ? ''
                        : 'op40',
                  };
                },
              },
              null,
              8,
              ['rules', 'get-bind'],
            ),
          ])
        );
      };
    },
  });
export { ge as default };

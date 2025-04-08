import { _ as ie, a as oe, s as ue, b as ae, F as re, c as pe } from './BupVbMfq.js';
import { g as Y, _ as de, a as ne } from './KJnl7Sfk.js';
import { _ as fe } from './DQKmB4pA.js';
import {
  e as X,
  m as Z,
  f as ce,
  r as V,
  g as se,
  h as ge,
  i as q,
  j as ve,
  c as i,
  o as n,
  a as t,
  k as g,
  t as f,
  n as R,
  l as P,
  b as x,
  F as c,
  p as D,
  q as me,
  s,
  w as ee,
  v as K,
  d as U,
  x as be,
  y as G,
  z as he,
  A as ye,
  B as r,
  C as te,
  D as F,
  E as ke,
  G as xe,
  H as y,
  I as we,
  J as Ce,
  K as $e,
  L as Oe,
  M as S,
  N as _e,
  O as je,
  P as L,
  Q,
  R as le,
  S as W,
} from './CTNqAv02.js';
const Me = ['open'],
  Fe = { block: '' },
  Se = {
    class: 'absolute right-[calc(100%+10px)] top-1.5',
    'text-right': '',
    'font-mono': '',
    op35: '',
    'lt-lg:hidden': '',
  },
  Re = {
    flex: '~ gap-2 items-center',
    'cursor-pointer': '',
    'select-none': '',
    'bg-hover': '',
    px2: '',
    py2: '',
    'text-sm': '',
    'font-mono': '',
  },
  Ie = {
    flex: '',
    'flex-auto': '',
    'flex-col': '',
    'flex-wrap': '',
    'gap-3': '',
    'md:flex-row': '',
    'md:justify-end': '',
  },
  Ee = { key: 1 },
  Te = { flex: '~ gap-2 items-start' },
  De = {
    'pointer-events-none': '',
    absolute: '',
    'right-2': '',
    'top-2': '',
    'text-right': '',
    'text-5em': '',
    'font-mono': '',
    op5: '',
  },
  Ne = { key: 0, flex: '~ col gap-4', 'of-auto': '', px4: '', py3: '' },
  Pe = { key: 0, flex: '~ gap-2 items-start' },
  Ae = { flex: '~ col gap-2' },
  Ge = { flex: '~ gap-2 items-center wrap' },
  Be = { key: 1, flex: '~ gap-2 items-center' },
  ze = { key: 2, flex: '~ gap-2 items-start' },
  Le = { flex: '~ col gap-2' },
  Ve = { flex: '~ gap-2 items-center wrap' },
  qe = ['onClick'],
  Ke = { key: 3, flex: '~ gap-2 items-start' },
  Ue = { flex: '~ col gap-2' },
  He = { key: 0 },
  Je = { key: 1 },
  Qe = { flex: '~ gap-2 items-center wrap' },
  We = { key: 4 },
  Xe = { flex: '~ gap-2 items-center' },
  Ye = ['onClick'],
  Ze = { key: 5, flex: '~ gap-2' },
  et = { flex: '~ col gap-2', 'w-full': '' },
  tt = { 'of-auto': '', p2: '', px3: '', op50: '' },
  lt = X({
    __name: 'ConfigItem',
    props: Z(
      { config: {}, index: {}, filters: {}, active: { type: Boolean }, matchedGlobs: {} },
      { open: { default: !0 }, openModifiers: {} },
    ),
    emits: Z(['badgeClick'], ['update:open']),
    setup(H, { emit: w }) {
      const J = H,
        B = w,
        j = new Set(['name']),
        M = new Set(['index']),
        N = ce(H, 'open'),
        C = V(N.value);
      if (!C.value) {
        const o = se(() => {
          N.value && ((C.value = !0), o());
        });
      }
      const $ = ge();
      function O(o) {
        (ye.plugin = o), $.push('/rules');
      }
      const I = q(() => {
        const o = ['files', 'plugins', 'ignores', 'rules', 'name', 'index'];
        return Object.fromEntries(Object.entries(J.config).filter(([a]) => !o.includes(a)));
      });
      return (o, a) => {
        var v, b, d, h;
        const m = de,
          E = fe,
          A = ne,
          z = ie,
          p = oe,
          e = ae,
          k = ve('close-popper');
        return (
          n(),
          i(
            'details',
            {
              class: R(['flat-config-item', o.active ? 'border-yellow:70' : 'border-base']),
              open: N.value,
              border: '~ rounded-lg',
              relative: '',
              onToggle: a[1] || (a[1] = (l) => (N.value = l.target.open)),
            },
            [
              t('summary', Fe, [
                t('div', Se, ' #' + f(o.index + 1), 1),
                t('div', Re, [
                  a[2] ||
                    (a[2] = t(
                      'div',
                      {
                        class: '[details[open]_&]:rotate-90',
                        'i-ph-caret-right': '',
                        'flex-none': '',
                        op50: '',
                        transition: '',
                      },
                      null,
                      -1,
                    )),
                  t('div', Ie, [
                    t(
                      'span',
                      { class: R(o.config.name ? '' : 'op50 italic'), 'flex-1': '' },
                      [
                        o.config.name
                          ? (n(), P(m, { key: 0, name: o.config.name }, null, 8, ['name']))
                          : (n(), i('span', Ee, 'anonymous #' + f(o.index + 1), 1)),
                      ],
                      2,
                    ),
                    t('div', Te, [
                      x(
                        E,
                        {
                          icon: 'i-ph-file-magnifying-glass-duotone',
                          number: ((v = o.config.files) == null ? void 0 : v.length) || 0,
                          color: 'text-yellow5',
                          title: 'Files',
                        },
                        null,
                        8,
                        ['number'],
                      ),
                      x(
                        E,
                        {
                          icon: 'i-ph-eye-closed-duotone',
                          number: ((b = o.config.ignores) == null ? void 0 : b.length) || 0,
                          color: 'text-purple5 dark:text-purple4',
                          title: 'Ignores',
                        },
                        null,
                        8,
                        ['number'],
                      ),
                      x(
                        E,
                        {
                          icon: 'i-ph-sliders-duotone',
                          number: Object.keys(I.value).length,
                          color: 'text-green5',
                          title: 'Options',
                        },
                        null,
                        8,
                        ['number'],
                      ),
                      x(
                        E,
                        {
                          icon: 'i-ph-plug-duotone',
                          number: Object.keys(o.config.plugins || {}).length,
                          color: 'text-teal5',
                          title: 'Plugins',
                        },
                        null,
                        8,
                        ['number'],
                      ),
                      x(
                        E,
                        {
                          icon: 'i-ph-list-dashes-duotone',
                          number: Object.keys(o.config.rules || {}).length,
                          color: 'text-blue5 dark:text-blue4',
                          title: 'Rules',
                          'mr-2': '',
                        },
                        null,
                        8,
                        ['number'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              t('div', De, ' #' + f(o.index + 1), 1),
              C.value
                ? (n(),
                  i('div', Ne, [
                    o.config.files
                      ? (n(),
                        i('div', Pe, [
                          a[4] ||
                            (a[4] = t(
                              'div',
                              {
                                'i-ph-file-magnifying-glass-duotone': '',
                                my1: '',
                                'flex-none': '',
                              },
                              null,
                              -1,
                            )),
                          t('div', Ae, [
                            a[3] || (a[3] = t('div', null, 'Applies to files matching', -1)),
                            t('div', Ge, [
                              (n(!0),
                              i(
                                c,
                                null,
                                D((d = o.config.files) == null ? void 0 : d.flat(), (l, u) => {
                                  var _;
                                  return (
                                    n(),
                                    P(
                                      A,
                                      {
                                        key: u,
                                        glob: l,
                                        popup: 'files',
                                        active:
                                          (_ = o.matchedGlobs) == null ? void 0 : _.includes(l),
                                      },
                                      null,
                                      8,
                                      ['glob', 'active'],
                                    )
                                  );
                                }),
                                128,
                              )),
                            ]),
                          ]),
                        ]))
                      : o.config.rules || Object.keys(I.value).length
                        ? (n(),
                          i(
                            'div',
                            Be,
                            a[5] ||
                              (a[5] = [
                                t('div', { 'i-ph-files-duotone': '', 'flex-none': '' }, null, -1),
                                t('div', null, 'Generally applies to all files', -1),
                              ]),
                          ))
                        : g('', !0),
                    o.config.plugins
                      ? (n(),
                        i('div', ze, [
                          a[6] ||
                            (a[6] = t(
                              'div',
                              { 'i-ph-plug-duotone': '', my1: '', 'flex-none': '' },
                              null,
                              -1,
                            )),
                          t('div', Le, [
                            t(
                              'div',
                              null,
                              'Plugins (' + f(Object.keys(o.config.plugins).length) + ')',
                              1,
                            ),
                            t('div', Ve, [
                              (n(!0),
                              i(
                                c,
                                null,
                                D(
                                  Object.keys(o.config.plugins),
                                  (l, u) => (
                                    n(),
                                    i(
                                      'button',
                                      {
                                        key: u,
                                        border: '~ base rounded-full',
                                        px3: '',
                                        style: me({
                                          color: ('getPluginColor' in o ? o.getPluginColor : s(Y))(
                                            l,
                                          ),
                                          backgroundColor: ('getPluginColor' in o
                                            ? o.getPluginColor
                                            : s(Y))(l, 0.1),
                                        }),
                                        'font-mono': '',
                                        onClick: (_) => O(l),
                                      },
                                      f(l),
                                      13,
                                      qe,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                          ]),
                        ]))
                      : g('', !0),
                    o.config.ignores
                      ? (n(),
                        i('div', Ke, [
                          a[7] ||
                            (a[7] = t(
                              'div',
                              { 'i-ph-eye-closed-duotone': '', my1: '', 'flex-none': '' },
                              null,
                              -1,
                            )),
                          t('div', Ue, [
                            Object.keys(o.config).some(
                              (l) => l !== 'ignores' && !s(M).has(l) && !s(j).has(l),
                            ) === !1
                              ? (n(), i('div', He, ' Ignore files globally '))
                              : (n(), i('div', Je, ' Ignore ')),
                            t('div', Qe, [
                              (n(!0),
                              i(
                                c,
                                null,
                                D(o.config.ignores, (l, u) => {
                                  var _;
                                  return (
                                    n(),
                                    P(
                                      A,
                                      {
                                        key: u,
                                        glob: l,
                                        active:
                                          (_ = o.matchedGlobs) == null ? void 0 : _.includes(l),
                                      },
                                      null,
                                      8,
                                      ['glob', 'active'],
                                    )
                                  );
                                }),
                                128,
                              )),
                            ]),
                          ]),
                        ]))
                      : g('', !0),
                    o.config.rules && Object.keys(o.config.rules).length
                      ? (n(),
                        i('div', We, [
                          t('div', Xe, [
                            a[8] ||
                              (a[8] = t(
                                'div',
                                { 'i-ph-list-dashes-duotone': '', my1: '', 'flex-none': '' },
                                null,
                                -1,
                              )),
                            t(
                              'div',
                              null,
                              'Rules (' + f(Object.keys(o.config.rules).length) + ')',
                              1,
                            ),
                          ]),
                          x(
                            p,
                            {
                              py2: '',
                              class: R(s(he) ? 'pl6' : ''),
                              rules: o.config.rules,
                              filter: (l) => {
                                var u;
                                return !((u = o.filters) != null && u.rule) || o.filters.rule === l;
                              },
                              'get-bind': (l) => {
                                var u;
                                return {
                                  class:
                                    s(G)((u = o.config.rules) == null ? void 0 : u[l]) === 'off'
                                      ? 'op50'
                                      : '',
                                };
                              },
                            },
                            {
                              popup: ee(({ ruleName: l, value: u }) => [
                                x(
                                  z,
                                  {
                                    border: 't base',
                                    'is-local': !0,
                                    state: {
                                      name: l,
                                      level: s(G)(u),
                                      configIndex: o.index,
                                      options: s(be)(u),
                                    },
                                  },
                                  null,
                                  8,
                                  ['state'],
                                ),
                              ]),
                              'popup-actions': ee(({ ruleName: l }) => [
                                K(
                                  (n(),
                                  i(
                                    'button',
                                    { 'btn-action-sm': '', onClick: (u) => B('badgeClick', l) },
                                    a[9] ||
                                      (a[9] = [
                                        t('div', { 'i-ph-funnel-duotone': '' }, null, -1),
                                        U(' Filter by this rule '),
                                      ]),
                                    8,
                                    Ye,
                                  )),
                                  [[k]],
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['class', 'rules', 'filter', 'get-bind'],
                          ),
                          t('div', null, [
                            (h = o.filters) != null && h.rule
                              ? (n(),
                                i(
                                  'button',
                                  {
                                    key: 0,
                                    ml8: '',
                                    op50: '',
                                    onClick: a[0] || (a[0] = (l) => B('badgeClick', '')),
                                  },
                                  ' ...' +
                                    f(
                                      Object.keys(o.config.rules).filter((l) => {
                                        var u;
                                        return l !== ((u = o.filters) == null ? void 0 : u.rule);
                                      }).length,
                                    ) +
                                    ' others rules are hidden ',
                                  1,
                                ))
                              : g('', !0),
                          ]),
                        ]))
                      : g('', !0),
                    Object.keys(I.value).length
                      ? (n(),
                        i('div', Ze, [
                          a[11] ||
                            (a[11] = t(
                              'div',
                              { 'i-ph-sliders-duotone': '', my1: '', 'flex-none': '' },
                              null,
                              -1,
                            )),
                          t('div', et, [
                            a[10] || (a[10] = t('div', null, ' Additional configurations ', -1)),
                            (n(!0),
                            i(
                              c,
                              null,
                              D(
                                I.value,
                                (l, u) => (
                                  n(),
                                  i('div', { key: u, border: '~ base rounded-lg' }, [
                                    t('div', tt, f(u), 1),
                                    x(
                                      e,
                                      {
                                        lang: 'ts',
                                        code: s(ue)(l),
                                        'max-h-100': '',
                                        'max-w-full': '',
                                        'w-full': '',
                                        'of-scroll': '',
                                        rounded: '',
                                        'bg-code': '',
                                        p2: '',
                                        'text-sm': '',
                                      },
                                      null,
                                      8,
                                      ['code'],
                                    ),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ]))
                      : g('', !0),
                  ]))
                : g('', !0),
            ],
            42,
            Me,
          )
        );
      };
    },
  }),
  ot = { flex: '~ col gap-3', py4: '' },
  nt = { relative: '', flex: '' },
  st = {
    pos: 'absolute left-8 right-8 top-1/1',
    border: '~ base rounded',
    flex: '~ col',
    'z-1': '',
    'mt--1': '',
    'max-h-80': '',
    'of-auto': '',
    py1: '',
    shadow: '',
    'bg-glass': '',
  },
  it = ['onClick'],
  ut = { key: 0, flex: '~ gap-2 items-center wrap', mb2: '' },
  at = { key: 0 },
  rt = { key: 0, op50: '' },
  pt = { key: 1 },
  dt = {
    flex: '~ gap-2 items-center',
    border: '~ blue/20 rounded-full',
    'bg-blue:10': '',
    px3: '',
    py1: '',
  },
  ft = { flex: '~ gap-2 items-center wrap' },
  ct = { key: 0, border: '~ base rounded', flex: '' },
  gt = { key: 1, flex: '~ gap-2 items-center', ml2: '', 'select-none': '' },
  vt = ['checked'],
  mt = { flex: '~ gap-2 items-center wrap' },
  bt = { class: 'flat-config-item', border: '~ base rounded-lg', relative: '' },
  ht = { block: '' },
  yt = {
    flex: '~ gap-2 items-start',
    'cursor-pointer': '',
    'select-none': '',
    'bg-hover': '',
    px2: '',
    py2: '',
    'text-sm': '',
    'font-mono': '',
    op75: '',
  },
  kt = { class: 'flat-config-item', border: '~ base rounded-lg', open: '', relative: '' },
  xt = { block: '' },
  wt = {
    flex: '~ gap-2 items-start',
    'cursor-pointer': '',
    'select-none': '',
    'bg-hover': '',
    px2: '',
    py2: '',
    'text-sm': '',
    'font-mono': '',
    op75: '',
  },
  Ct = { px4: '', pt4: '' },
  $t = { px4: '', pt4: '' },
  Ft = X({
    __name: 'configs',
    setup(H) {
      const w = V(r.filepath);
      function J() {
        S.value = S.value.map(() => !0);
      }
      function B() {
        S.value = S.value.map(() => !1);
      }
      const j = te([]),
        M = te(null);
      se(() => {
        let p = F.value.configs;
        r.filepath
          ? ((M.value = ke(r.filepath, F.value.configs, F.value.meta.basePath)),
            M.value.configs.length
              ? (p = Array.from(
                  new Set([
                    ...M.value.configs,
                    ...F.value.configsGeneral.filter((e) => !xe(e)).map((e) => e.index),
                  ]),
                )
                  .sort()
                  .map((e) => F.value.configs[e]))
              : (p = []))
          : (M.value = null),
          r.rule && (p = p.filter((e) => r.rule in (e.rules || {}))),
          (j.value = p);
      });
      const N = q(() => {
          var p;
          return new re(((p = F.value.filesResolved) == null ? void 0 : p.list) || [], {
            threshold: 0.3,
            includeMatches: !0,
          });
        }),
        C = q(() => N.value.search(r.filepath || '')),
        $ = V(0),
        O = V(!1);
      function I(p = $.value) {
        var e;
        O.value &&
          ((w.value = r.filepath = ((e = C.value[p]) == null ? void 0 : e.item) || r.filepath),
          (O.value = !1));
      }
      function o() {
        setTimeout(() => {
          O.value = !1;
        }, 100);
      }
      function a(p) {
        O.value &&
          (($.value += p),
          $.value < 0 && ($.value += C.value.length),
          $.value >= C.value.length && ($.value -= C.value.length));
      }
      const m = q(() => {
          if (!r.filepath || y.value.viewFileMatchType !== 'merged')
            return { all: {}, common: {}, specific: {}, specificDisabled: {}, specificEnabled: {} };
          const p = {},
            e = {},
            k = {};
          j.value.forEach((d) => {
            d.rules &&
              (Object.assign(p, d.rules),
              d.files ? Object.assign(k, d.rules) : Object.assign(e, d.rules));
          });
          const v = Object.fromEntries(Object.entries(k).filter(([d, h]) => G(h) === 'off')),
            b = Object.fromEntries(Object.entries(k).filter(([d, h]) => G(h) !== 'off'));
          for (const d in p) G(p[d]) === 'off' && delete p[d];
          return { all: p, common: e, specific: k, specificDisabled: v, specificEnabled: b };
        }),
        E = X({
          props: { matches: Array },
          setup(p) {
            return () => {
              var e;
              return (e = p.matches) == null
                ? void 0
                : e.map((k) => {
                    let v = 0;
                    const b = k.value || '',
                      d = [];
                    for (const [h, l] of k.indices)
                      v < h && d.push(W('span', { class: 'op50' }, b.slice(v, h))),
                        d.push(W('span', { class: 'text-purple font-bold' }, b.slice(h, l + 1))),
                        (v = l + 1);
                    return v < b.length && d.push(W('span', { class: 'op50' }, b.slice(v))), d;
                  });
            };
          },
        });
      we(
        () => w.value,
        () => {
          (r.filepath = w.value), ($.value = 0);
        },
        { debounce: 200 },
      ),
        Ce(
          () => r.filepath,
          () => {
            r.filepath !== w.value && (w.value = r.filepath);
          },
          { flush: 'sync' },
        );
      const A = new Map(),
        z = $e();
      return (
        Oe(async () => {
          var p;
          if (z.query.index != null) {
            const e = Number(z.query.index) - 1;
            (S.value = S.value.map((k, v) => v === e)),
              await _e(),
              (p = A.get(e)) == null || p.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }),
        (p, e) => {
          var h;
          const k = pe,
            v = ne,
            b = oe,
            d = lt;
          return (
            n(),
            i('div', null, [
              t('div', ot, [
                t('div', nt, [
                  K(
                    t(
                      'input',
                      {
                        'onUpdate:modelValue': e[0] || (e[0] = (l) => (w.value = l)),
                        placeholder: 'Test matching with filepath...',
                        border: '~ base rounded-full',
                        class: R(w.value ? 'font-mono' : ''),
                        'w-full': '',
                        'bg-transparent': '',
                        px3: '',
                        py2: '',
                        pl10: '',
                        'outline-none': '',
                        onFocus: e[1] || (e[1] = (l) => (O.value = !0)),
                        onClick: e[2] || (e[2] = (l) => (O.value = !0)),
                        onBlur: o,
                        onKeydown: [
                          e[3] || (e[3] = L((l) => (O.value = !1), ['esc'])),
                          e[4] ||
                            (e[4] = L(
                              Q((l) => a(1), ['prevent']),
                              ['down'],
                            )),
                          e[5] ||
                            (e[5] = L(
                              Q((l) => a(-1), ['prevent']),
                              ['up'],
                            )),
                          e[6] ||
                            (e[6] = L(
                              Q((l) => I(), ['prevent']),
                              ['enter'],
                            )),
                        ],
                      },
                      null,
                      34,
                    ),
                    [[je, w.value]],
                  ),
                  e[13] ||
                    (e[13] = t(
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
                      [t('div', { 'i-ph-magnifying-glass-duotone': '' })],
                      -1,
                    )),
                  K(
                    t(
                      'div',
                      st,
                      [
                        (n(!0),
                        i(
                          c,
                          null,
                          D(
                            C.value,
                            (l, u) => (
                              n(),
                              i(
                                'button',
                                {
                                  key: l.item,
                                  class: R(u === $.value ? 'bg-active' : ''),
                                  'hover:bg-active': '',
                                  px3: '',
                                  'py0.5': '',
                                  'text-left': '',
                                  'font-mono': '',
                                  onClick: (_) => I(u),
                                },
                                [
                                  l.matches
                                    ? (n(),
                                      P(s(E), { key: 0, matches: l.matches }, null, 8, ['matches']))
                                    : (n(), i(c, { key: 1 }, [U(f(l.item), 1)], 64)),
                                ],
                                10,
                                it,
                              )
                            ),
                          ),
                          128,
                        )),
                      ],
                      512,
                    ),
                    [[le, O.value && C.value.length]],
                  ),
                ]),
                s(r).filepath || s(r).rule
                  ? (n(),
                    i('div', ut, [
                      s(r).filepath
                        ? (n(),
                          i('div', at, [
                            t(
                              'div',
                              {
                                flex: '~ gap-2 items-center wrap',
                                border: '~ purple/20 rounded-full',
                                'bg-purple:10': '',
                                px3: '',
                                py1: '',
                                class: R({ 'saturate-0': !j.value.length }),
                              },
                              [
                                e[19] ||
                                  (e[19] = t(
                                    'div',
                                    { 'i-ph-file-dotted-duotone': '', 'text-purple': '' },
                                    null,
                                    -1,
                                  )),
                                e[20] || (e[20] = t('span', { op50: '' }, 'Filepath', -1)),
                                t('code', null, f(s(r).filepath), 1),
                                j.value.length
                                  ? s(y).viewFileMatchType === 'configs'
                                    ? (n(),
                                      i(
                                        c,
                                        { key: 1 },
                                        [
                                          e[14] ||
                                            (e[14] = t('span', { op50: '' }, 'matched with', -1)),
                                          t(
                                            'span',
                                            null,
                                            f(j.value.length) + ' / ' + f(s(F).configs.length),
                                            1,
                                          ),
                                          e[15] ||
                                            (e[15] = t('span', { op50: '' }, 'config items', -1)),
                                        ],
                                        64,
                                      ))
                                    : (n(),
                                      i(
                                        c,
                                        { key: 2 },
                                        [
                                          e[16] ||
                                            (e[16] = t(
                                              'span',
                                              { op50: '' },
                                              'matched with total ',
                                              -1,
                                            )),
                                          t('span', null, f(Object.keys(m.value.all).length), 1),
                                          e[17] || (e[17] = t('span', { op50: '' }, 'rules, ', -1)),
                                          t(
                                            'span',
                                            null,
                                            f(Object.keys(m.value.specific).length),
                                            1,
                                          ),
                                          e[18] ||
                                            (e[18] = t(
                                              'span',
                                              { op50: '' },
                                              'of them are specific to the file',
                                              -1,
                                            )),
                                        ],
                                        64,
                                      ))
                                  : (n(), i('span', rt, 'is not included or has been ignored')),
                                t('button', {
                                  'i-ph-x': '',
                                  'text-sm': '',
                                  op25: '',
                                  'hover:op100': '',
                                  onClick:
                                    e[7] ||
                                    (e[7] = (l) => {
                                      (s(r).filepath = ''), (w.value = '');
                                    }),
                                }),
                              ],
                              2,
                            ),
                          ]))
                        : g('', !0),
                      s(r).rule
                        ? (n(),
                          i('div', pt, [
                            t('div', dt, [
                              e[21] || (e[21] = t('div', { 'i-ph-funnel-duotone': '' }, null, -1)),
                              e[22] || (e[22] = t('span', { op50: '' }, 'Filtered by', -1)),
                              x(k, { name: s(r).rule }, null, 8, ['name']),
                              e[23] || (e[23] = t('span', { op50: '' }, 'rule', -1)),
                              t('button', {
                                'i-ph-x': '',
                                'text-sm': '',
                                op25: '',
                                'hover:op100': '',
                                onClick: e[8] || (e[8] = (l) => (s(r).rule = '')),
                              }),
                            ]),
                          ]))
                        : g('', !0),
                    ]))
                  : g('', !0),
                t('div', ft, [
                  s(r).filepath
                    ? (n(),
                      i('div', ct, [
                        t(
                          'button',
                          {
                            class: R(
                              s(y).viewFileMatchType === 'configs' ? 'btn-action-active' : 'op50',
                            ),
                            'border-none': '',
                            'btn-action': '',
                            onClick:
                              e[9] ||
                              (e[9] = (l) =>
                                (s(y).viewFileMatchType =
                                  s(y).viewFileMatchType === 'configs' ? 'merged' : 'configs')),
                          },
                          e[24] ||
                            (e[24] = [
                              t('div', { 'i-ph-stack-duotone': '' }, null, -1),
                              t('span', null, 'Matched Config Items', -1),
                            ]),
                          2,
                        ),
                        e[26] || (e[26] = t('div', { border: 'l base' }, null, -1)),
                        t(
                          'button',
                          {
                            class: R(
                              s(y).viewFileMatchType !== 'configs' ? 'btn-action-active' : 'op50',
                            ),
                            'border-none': '',
                            'btn-action': '',
                            onClick:
                              e[10] ||
                              (e[10] = (l) =>
                                (s(y).viewFileMatchType =
                                  s(y).viewFileMatchType === 'configs' ? 'merged' : 'configs')),
                          },
                          e[25] ||
                            (e[25] = [
                              t('div', { 'i-ph-film-script-duotone': '' }, null, -1),
                              t('span', null, 'Merged Rules', -1),
                            ]),
                          2,
                        ),
                      ]))
                    : g('', !0),
                  s(r).filepath && s(y).viewFileMatchType === 'configs'
                    ? (n(),
                      i('label', gt, [
                        t(
                          'input',
                          {
                            checked: s(y).showSpecificOnly,
                            type: 'checkbox',
                            onChange:
                              e[11] ||
                              (e[11] = (l) => (s(y).showSpecificOnly = !!l.target.checked)),
                          },
                          null,
                          40,
                          vt,
                        ),
                        e[27] || (e[27] = t('span', { op50: '' }, 'Show Specific Rules Only', -1)),
                      ]))
                    : g('', !0),
                  e[28] || (e[28] = t('div', { 'flex-auto': '' }, null, -1)),
                  t('button', { px3: '', 'btn-action': '', onClick: J }, ' Expand All '),
                  t('button', { px3: '', 'btn-action': '', onClick: B }, ' Collapse All '),
                ]),
                j.value.length
                  ? (n(),
                    i(
                      c,
                      { key: 2 },
                      [
                        s(r).filepath && s(y).viewFileMatchType === 'merged'
                          ? (n(),
                            i(
                              c,
                              { key: 0 },
                              [
                                t('details', bt, [
                                  t('summary', ht, [
                                    t('div', yt, [
                                      e[31] ||
                                        (e[31] = t(
                                          'div',
                                          {
                                            'i-ph-caret-right': '',
                                            class: '[details[open]_&]:rotate-90',
                                            transition: '',
                                          },
                                          null,
                                          -1,
                                        )),
                                      U(
                                        ' Merged Rules: Common to every file (' +
                                          f(Object.keys(m.value.common).length) +
                                          ' rules) ',
                                        1,
                                      ),
                                    ]),
                                  ]),
                                  x(b, { m4: '', rules: m.value.common }, null, 8, ['rules']),
                                ]),
                                t('details', kt, [
                                  t('summary', xt, [
                                    t('div', wt, [
                                      e[32] ||
                                        (e[32] = t(
                                          'div',
                                          {
                                            'i-ph-caret-right': '',
                                            class: '[details[open]_&]:rotate-90',
                                            transition: '',
                                          },
                                          null,
                                          -1,
                                        )),
                                      U(
                                        ' Merged Rules: Specific to matched file (' +
                                          f(Object.keys(m.value.specific).length) +
                                          ' rules) ',
                                        1,
                                      ),
                                    ]),
                                  ]),
                                  Object.keys(m.value.specificDisabled).length
                                    ? (n(),
                                      i(
                                        c,
                                        { key: 0 },
                                        [
                                          t(
                                            'div',
                                            Ct,
                                            ' Disables (' +
                                              f(Object.keys(m.value.specificDisabled).length) +
                                              ') ',
                                            1,
                                          ),
                                          x(
                                            b,
                                            {
                                              m4: '',
                                              'get-bind': (l) => ({ class: 'op50' }),
                                              rules: m.value.specificDisabled,
                                            },
                                            null,
                                            8,
                                            ['rules'],
                                          ),
                                        ],
                                        64,
                                      ))
                                    : g('', !0),
                                  Object.keys(m.value.specificEnabled).length
                                    ? (n(),
                                      i(
                                        c,
                                        { key: 1 },
                                        [
                                          t(
                                            'div',
                                            $t,
                                            ' Enables (' +
                                              f(Object.keys(m.value.specificEnabled).length) +
                                              ') ',
                                            1,
                                          ),
                                          x(
                                            b,
                                            { m4: '', rules: m.value.specificEnabled },
                                            null,
                                            8,
                                            ['rules'],
                                          ),
                                        ],
                                        64,
                                      ))
                                    : g('', !0),
                                ]),
                              ],
                              64,
                            ))
                          : (n(!0),
                            i(
                              c,
                              { key: 1 },
                              D(s(F).configs, (l, u) => {
                                var _;
                                return K(
                                  (n(),
                                  P(
                                    d,
                                    {
                                      key: u,
                                      ref_for: !0,
                                      ref: (T) => {
                                        s(A).set(u, T == null ? void 0 : T.$el);
                                      },
                                      open: s(S)[u],
                                      'onUpdate:open': (T) => (s(S)[u] = T),
                                      payload: s(F),
                                      config: l,
                                      index: u,
                                      filters: s(r),
                                      active: !!(s(r).filepath && l.files),
                                      'matched-globs': (_ = M.value) == null ? void 0 : _.globs,
                                      onBadgeClick: e[12] || (e[12] = (T) => (s(r).rule = T)),
                                    },
                                    null,
                                    8,
                                    [
                                      'open',
                                      'onUpdate:open',
                                      'payload',
                                      'config',
                                      'index',
                                      'filters',
                                      'active',
                                      'matched-globs',
                                    ],
                                  )),
                                  [
                                    [
                                      le,
                                      j.value.includes(l) &&
                                        (!s(r).filepath || !s(y).showSpecificOnly || l.files),
                                    ],
                                  ],
                                );
                              }),
                              128,
                            )),
                      ],
                      64,
                    ))
                  : (n(),
                    i(
                      c,
                      { key: 1 },
                      [
                        e[30] ||
                          (e[30] = t(
                            'div',
                            { mt5: '', italic: '', op50: '' },
                            ' No matched config items. ',
                            -1,
                          )),
                        (h = M.value) != null && h.globs.length
                          ? (n(),
                            i(
                              c,
                              { key: 0 },
                              [
                                e[29] || (e[29] = t('div', null, 'Ignored by globs:', -1)),
                                t('div', mt, [
                                  (n(!0),
                                  i(
                                    c,
                                    null,
                                    D(
                                      M.value.globs,
                                      (l, u) => (
                                        n(),
                                        P(v, { key: u, glob: l, popup: 'configs' }, null, 8, [
                                          'glob',
                                        ])
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ],
                              64,
                            ))
                          : g('', !0),
                      ],
                      64,
                    )),
              ]),
            ])
          );
        }
      );
    },
  });
export { Ft as default };

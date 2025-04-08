import { _ as U, a as H, b as R } from './KJnl7Sfk.js';
import { _ as O } from './DQKmB4pA.js';
import {
  e as z,
  m as j,
  f as q,
  r as J,
  g as K,
  i as P,
  h as Q,
  T as W,
  c as s,
  o,
  a as e,
  k as $,
  t as v,
  F as r,
  b,
  p as u,
  l as c,
  w as M,
  U as X,
  d as T,
  s as i,
  D as h,
  n as A,
  H as g,
  V as m,
} from './CTNqAv02.js';
const Y = ['open'],
  Z = { block: '' },
  ee = {
    class: 'absolute right-[calc(100%+10px)] top-1.5',
    'text-right': '',
    'font-mono': '',
    op35: '',
    'lt-lg:hidden': '',
  },
  oe = {
    flex: '~ gap-2 items-start wrap items-center',
    'cursor-pointer': '',
    'select-none': '',
    'bg-hover': '',
    px2: '',
    py2: '',
    'text-sm': '',
    'font-mono': '',
  },
  te = { flex: '', 'flex-auto': '', 'flex-col': '', 'gap-3': '', 'md:flex-row': '' },
  ne = { 'flex-auto': '', flex: '~ gap-2 items-center' },
  le = { key: 2, op50: '' },
  se = { flex: '~ gap-2 items-start wrap' },
  ie = {
    'pointer-events-none': '',
    absolute: '',
    'right-2': '',
    'top-2': '',
    'text-right': '',
    'text-5em': '',
    'font-mono': '',
    op5: '',
  },
  ae = { key: 0, flex: '~ col gap-4', 'of-auto': '', px4: '', py4: '' },
  re = { flex: '~ gap-2 items-center' },
  pe = { flex: '~ col gap-1', ml6: '', 'mt--2': '' },
  ue = { badge: '', 'text-start': '' },
  de = { key: 0, 'max-h': '50vh', 'min-w-100': '' },
  fe = { flex: '~ items-center gap-2', p3: '' },
  ge = ['onClick'],
  me = { p3: '', border: 't base' },
  ve = { flex: '~ gap-2 items-start' },
  ce = { flex: '~ col gap-2' },
  be = { flex: '~ gap-2 items-center wrap' },
  xe = { flex: '~ gap-1 wrap', ml6: '', 'mt--2': '' },
  _e = { flex: '~ gap-2 items-center' },
  he = { flex: '~ col gap-1', ml7: '', 'mt--2': '' },
  ye = z({
    __name: 'FileGroupItem',
    props: j({ index: {}, group: {} }, { open: { default: !0 }, openModifiers: {} }),
    emits: ['update:open'],
    setup(y) {
      const d = y,
        f = q(y, 'open'),
        x = J(f.value);
      if (!x.value) {
        const n = K(() => {
          f.value && ((x.value = !0), n());
        });
      }
      const t = P(() => {
          if (d.group.configs.length === 1) return { type: 'config', config: d.group.configs[0] };
          if (d.group.globs.size <= 2) return { type: 'glob', globs: [...d.group.globs.values()] };
        }),
        k = Q();
      function w(n) {
        k.push(`/configs?index=${n + 1}`);
      }
      return (n, l) => {
        var N, S, V;
        const _ = U,
          C = H,
          G = O,
          B = W('VDropdown'),
          D = R;
        return (
          o(),
          s(
            'details',
            {
              class: 'flat-config-item',
              open: f.value,
              border: '~ base rounded-lg',
              relative: '',
              onToggle: l[0] || (l[0] = (a) => (f.value = a.target.open)),
            },
            [
              e('summary', Z, [
                e('div', ee, ' #' + v(n.index + 1), 1),
                e('div', oe, [
                  l[3] ||
                    (l[3] = e(
                      'div',
                      {
                        class: '[details[open]_&]:rotate-90',
                        'i-ph-caret-right': '',
                        op50: '',
                        transition: '',
                      },
                      null,
                      -1,
                    )),
                  e('div', te, [
                    e('span', ne, [
                      ((N = t.value) == null ? void 0 : N.type) === 'config'
                        ? (o(),
                          s(
                            r,
                            { key: 0 },
                            [
                              l[1] || (l[1] = e('span', { op75: '' }, 'Config', -1)),
                              b(
                                _,
                                {
                                  badge: '',
                                  name: t.value.config.name,
                                  index: t.value.config.index,
                                },
                                null,
                                8,
                                ['name', 'index'],
                              ),
                            ],
                            64,
                          ))
                        : ((S = t.value) == null ? void 0 : S.type) === 'glob'
                          ? (o(),
                            s(
                              r,
                              { key: 1 },
                              [
                                l[2] || (l[2] = e('span', { op75: '' }, 'Globs', -1)),
                                (o(!0),
                                s(
                                  r,
                                  null,
                                  u(
                                    t.value.globs,
                                    (a, p) => (o(), c(C, { key: p, glob: a }, null, 8, ['glob'])),
                                  ),
                                  128,
                                )),
                              ],
                              64,
                            ))
                          : (o(), s('span', le, ' Files group #' + v(n.index + 1), 1)),
                    ]),
                    e('div', se, [
                      b(
                        G,
                        {
                          icon: 'i-ph-files-duotone',
                          number: ((V = n.group.files) == null ? void 0 : V.length) || 0,
                          color: 'text-yellow5',
                          title: 'Files',
                        },
                        null,
                        8,
                        ['number'],
                      ),
                      b(
                        G,
                        {
                          icon: 'i-ph-stack-duotone',
                          number: n.group.configs.length,
                          color: 'text-blue5 dark:text-blue4',
                          title: 'Configs',
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
              e('div', ie, ' #' + v(n.index + 1), 1),
              x.value
                ? (o(),
                  s('div', ae, [
                    e('div', re, [
                      l[4] ||
                        (l[4] = e('div', { 'i-ph-stack-duotone': '', 'flex-none': '' }, null, -1)),
                      e(
                        'div',
                        null,
                        'Configs Specific to the Files (' + v(n.group.configs.length) + ')',
                        1,
                      ),
                    ]),
                    e('div', pe, [
                      (o(!0),
                      s(
                        r,
                        null,
                        u(
                          n.group.configs,
                          (a, p) => (
                            o(),
                            s('div', { key: p, 'font-mono': '', flex: '~ gap-2' }, [
                              b(
                                B,
                                null,
                                {
                                  popper: M(({ shown: L }) => {
                                    var I;
                                    return [
                                      L
                                        ? (o(),
                                          s('div', de, [
                                            e('div', fe, [
                                              e(
                                                'button',
                                                {
                                                  'btn-action-sm': '',
                                                  title: 'Copy',
                                                  onClick: (F) => w(p),
                                                },
                                                l[5] ||
                                                  (l[5] = [
                                                    e(
                                                      'div',
                                                      { 'i-ph-stack-duotone': '' },
                                                      null,
                                                      -1,
                                                    ),
                                                    T(' Go to this config '),
                                                  ]),
                                                8,
                                                ge,
                                              ),
                                              X(n.$slots, 'popup-actions'),
                                            ]),
                                            e('div', me, [
                                              e('div', ve, [
                                                l[7] ||
                                                  (l[7] = e(
                                                    'div',
                                                    {
                                                      'i-ph-file-magnifying-glass-duotone': '',
                                                      my1: '',
                                                      'flex-none': '',
                                                      op75: '',
                                                    },
                                                    null,
                                                    -1,
                                                  )),
                                                e('div', ce, [
                                                  l[6] ||
                                                    (l[6] = e(
                                                      'div',
                                                      { op50: '' },
                                                      ' Applies to files matching ',
                                                      -1,
                                                    )),
                                                  e('div', be, [
                                                    (o(!0),
                                                    s(
                                                      r,
                                                      null,
                                                      u(
                                                        (I = a.files) == null ? void 0 : I.flat(),
                                                        (F, E) => (
                                                          o(),
                                                          c(
                                                            C,
                                                            {
                                                              key: E,
                                                              glob: F,
                                                              active: n.group.globs.has(F),
                                                            },
                                                            null,
                                                            8,
                                                            ['glob', 'active'],
                                                          )
                                                        ),
                                                      ),
                                                      128,
                                                    )),
                                                  ]),
                                                ]),
                                              ]),
                                            ]),
                                          ]))
                                        : $('', !0),
                                    ];
                                  }),
                                  default: M(() => [
                                    e('button', ue, [
                                      b(_, { name: a.name, index: p }, null, 8, ['name', 'index']),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                    l[9] ||
                      (l[9] = e(
                        'div',
                        { flex: '~ gap-2 items-center' },
                        [
                          e('div', { 'i-ph-file-magnifying-glass-duotone': '', 'flex-none': '' }),
                          e('div', null, 'Matched Globs'),
                        ],
                        -1,
                      )),
                    e('div', xe, [
                      (o(!0),
                      s(
                        r,
                        null,
                        u(
                          n.group.globs,
                          (a, p) => (o(), c(C, { key: p, glob: a }, null, 8, ['glob'])),
                        ),
                        128,
                      )),
                    ]),
                    e('div', _e, [
                      l[8] ||
                        (l[8] = e('div', { 'i-ph-files-duotone': '', 'flex-none': '' }, null, -1)),
                      e('div', null, 'Matched Local Files (' + v(n.group.files.length) + ')', 1),
                    ]),
                    e('div', he, [
                      (o(!0),
                      s(
                        r,
                        null,
                        u(
                          n.group.files,
                          (a) => (
                            o(),
                            c(D, { key: a, 'font-mono': '', filepath: a }, null, 8, ['filepath'])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]))
                : $('', !0),
            ],
            40,
            Y,
          )
        );
      };
    },
  }),
  ke = { key: 0, flex: '~ col gap-4', my4: '' },
  we = { flex: '~ gap-2 items-center' },
  Ce = { border: '~ base rounded', flex: '~ inline' },
  Fe = { key: 0, flex: '~ gap-2 col' },
  $e = { key: 1 },
  Te = { flex: '~ gap-2 items-center' },
  Ge = { flex: '~ col gap-1', py4: '', 'font-mono': '' },
  Ne = { key: 1 },
  Me = z({
    __name: 'files',
    setup(y) {
      function d() {
        m.value = m.value.map(() => !0);
      }
      function f() {
        m.value = m.value.map(() => !1);
      }
      return (x, t) => {
        const k = ye,
          w = R;
        return i(h).filesResolved
          ? (o(),
            s('div', ke, [
              t[7] ||
                (t[7] = e(
                  'div',
                  { 'text-gray:75': '' },
                  [
                    T(
                      ' This tab shows the preview for files match from the workspace. This feature is ',
                    ),
                    e('span', { 'text-amber': '' }, 'experimental'),
                    T(' and may not be 100% accurate. '),
                  ],
                  -1,
                )),
              e('div', we, [
                e('div', Ce, [
                  e(
                    'button',
                    {
                      class: A(i(g).viewFilesTab === 'list' ? 'btn-action-active' : 'op50'),
                      'border-none': '',
                      'btn-action': '',
                      onClick: t[0] || (t[0] = (n) => (i(g).viewFilesTab = 'list')),
                    },
                    t[2] ||
                      (t[2] = [
                        e('div', { 'i-ph-files-duotone': '' }, null, -1),
                        e('span', null, 'List', -1),
                      ]),
                    2,
                  ),
                  t[4] || (t[4] = e('div', { border: 'l base' }, null, -1)),
                  e(
                    'button',
                    {
                      class: A(i(g).viewFilesTab === 'group' ? 'btn-action-active' : 'op50'),
                      'border-none': '',
                      'btn-action': '',
                      onClick: t[1] || (t[1] = (n) => (i(g).viewFilesTab = 'group')),
                    },
                    t[3] ||
                      (t[3] = [
                        e('div', { 'i-ph-rows-duotone': '' }, null, -1),
                        e('span', null, 'File Groups', -1),
                      ]),
                    2,
                  ),
                ]),
                t[5] || (t[5] = e('div', { 'flex-auto': '' }, null, -1)),
                i(g).viewFilesTab === 'group'
                  ? (o(),
                    s(
                      r,
                      { key: 0 },
                      [
                        e('button', { px3: '', 'btn-action': '', onClick: d }, ' Expand All '),
                        e('button', { px3: '', 'btn-action': '', onClick: f }, ' Collapse All '),
                      ],
                      64,
                    ))
                  : $('', !0),
              ]),
              i(g).viewFilesTab === 'group'
                ? (o(),
                  s('div', Fe, [
                    (o(!0),
                    s(
                      r,
                      null,
                      u(
                        i(h).filesResolved.groups,
                        (n, l) => (
                          o(),
                          c(
                            k,
                            {
                              key: n.id,
                              open: i(m)[l],
                              'onUpdate:open': (_) => (i(m)[l] = _),
                              group: n,
                              index: l,
                            },
                            null,
                            8,
                            ['open', 'onUpdate:open', 'group', 'index'],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]))
                : (o(),
                  s('div', $e, [
                    e('div', Te, [
                      t[6] ||
                        (t[6] = e('div', { 'i-ph-files-duotone': '', 'flex-none': '' }, null, -1)),
                      e(
                        'div',
                        null,
                        'Matched Local Files (' + v(i(h).filesResolved.list.length) + ')',
                        1,
                      ),
                    ]),
                    e('div', Ge, [
                      (o(!0),
                      s(
                        r,
                        null,
                        u(
                          i(h).filesResolved.list,
                          (n) => (o(), c(w, { key: n, filepath: n }, null, 8, ['filepath'])),
                        ),
                        128,
                      )),
                    ]),
                  ])),
            ]))
          : (o(),
            s(
              'div',
              Ne,
              t[8] ||
                (t[8] = [
                  e(
                    'div',
                    { p3: '', italic: '', op50: '' },
                    ' No matched files found in the workspace. ',
                    -1,
                  ),
                ]),
            ));
      };
    },
  });
export { Me as default };

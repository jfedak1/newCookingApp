'use client';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    
    /* Primary  */
    '--color-primary-0': '225 245 246',   // #e1f5f6 (lightest)
    '--color-primary-50': '207 237 238',  // #cfedee
    '--color-primary-100': '189 229 230', // #bde5e6
    '--color-primary-200': '171 221 222', // #abddde
    '--color-primary-300': '153 213 214', // #99d5d6
    '--color-primary-400': '135 205 206', // #87cdce
    '--color-primary-500': '112 185 190', // #70b9be (base)
    '--color-primary-600': '100 166 170', // #64a6aa
    '--color-primary-700': '88 147 151',  // #589397
    '--color-primary-800': '76 128 131',  // #4c8083
    '--color-primary-900': '64 109 111',  // #406d6f
    '--color-primary-950': '52 90 91',    // #345a5b (darkest)
    '--color-primary-text': '10 37 51',    // #0a2533 (for text)

    /* Secondary  */
    '--color-secondary-0': '255 246 237',   // #fff6ed (lightest)
    '--color-secondary-50': '255 236 215',  // #ffecd7
    '--color-secondary-100': '255 224 191', // #ffe0bf
    '--color-secondary-200': '255 210 165', // #ffd2a5
    '--color-secondary-300': '255 192 129', // #ffc081
    '--color-secondary-400': '255 169 97',  // #ffa961
    '--color-secondary-500': '255 139 62',  // #ff8b3e (base)
    '--color-secondary-600': '230 125 56',  // #e67d38
    '--color-secondary-700': '204 110 50',  // #cc6e32
    '--color-secondary-800': '179 95 44',   // #b35f2c
    '--color-secondary-900': '153 80 38',   // #995026
    '--color-secondary-950': '128 67 32',   // #804320 (darkest)

    /* Tertiary */
    '--color-tertiary-0': '255 250 230',    // #fffaf6 (lightest)
    '--color-tertiary-50': '255 244 204',   // #fff4cc
    '--color-tertiary-100': '255 235 179',  // #ffebb3
    '--color-tertiary-200': '255 222 128',  // #ffde80
    '--color-tertiary-300': '255 208 77',   // #ffd04d
    '--color-tertiary-400': '250 185 50',   // #fab932
    '--color-tertiary-500': '235 162 40',   // #eba228 (base)
    '--color-tertiary-600': '210 144 35',   // #d29023
    '--color-tertiary-700': '184 126 30',   // #b87e1e
    '--color-tertiary-800': '158 108 25',   // #9e6c19
    '--color-tertiary-900': '133 91 20',    // #855b14
    '--color-tertiary-950': '108 74 15',    // #6c4a0f (darkest)

    /* Error */
    '--color-error-0': '255 238 238',   // #ffeeee (lightest)
    '--color-error-50': '254 223 223',  // #fedefd
    '--color-error-100': '253 191 191', // #fdbfbf
    '--color-error-200': '252 147 147', // #fc9393
    '--color-error-300': '248 102 102', // #f86666
    '--color-error-400': '239 68 68',   // #ef4444
    '--color-error-500': '220 38 38',   // #dc2626 (base)
    '--color-error-600': '185 28 28',   // #b91c1c
    '--color-error-700': '153 27 27',   // #991b1b
    '--color-error-800': '127 29 29',   // #7f1d1d
    '--color-error-900': '83 19 19',    // #531313
    '--color-error-950': '66 12 12',    // #420c0c (darkest)

    /* Success */
    '--color-success-0': '228 250 238',   // #e4faee (lightest)
    '--color-success-50': '210 240 222',  // #d2f0de
    '--color-success-100': '182 229 202', // #b6e5ca
    '--color-success-200': '154 218 182', // #9adab6
    '--color-success-300': '126 207 162', // #7ecfa2
    '--color-success-400': '98 196 142',  // #62c48e
    '--color-success-500': '72 179 125',  // #48b37d (base)
    '--color-success-600': '56 150 98',   // #389662
    '--color-success-700': '42 121 72',   // #2a7948
    '--color-success-800': '32 101 60',   // #20653c
    '--color-success-900': '23 81 47',    // #17512f
    '--color-success-950': '15 61 35',    // #0f3d23 (darkest)

    /* Warning */
    '--color-warning-0': '255 249 234',   // #fff9ea (lightest)
    '--color-warning-50': '255 239 204',  // #ffefcc
    '--color-warning-100': '255 223 166', // #ffdfa6
    '--color-warning-200': '254 198 111', // #fec66f
    '--color-warning-300': '252 169 64',  // #fca940
    '--color-warning-400': '250 139 38',  // #fa8b26
    '--color-warning-500': '231 113 32',  // #e77120 (base)
    '--color-warning-600': '204 98 27',   // #cc621b
    '--color-warning-700': '178 84 23',   // #b25417
    '--color-warning-800': '152 71 19',   // #984713
    '--color-warning-900': '127 59 15',   // #7f3b0f
    '--color-warning-950': '102 47 12',   // #662f0c (darkest)

    /* Info */
    '--color-info-0': '235 248 254',   // #ebf8fe (lightest)
    '--color-info-50': '210 235 252',  // #d2ebfc
    '--color-info-100': '180 221 250', // #b4ddfa
    '--color-info-200': '140 201 248', // #8cc9f8
    '--color-info-300': '100 181 246', // #64b5f6
    '--color-info-400': '72 161 242',  // #48a1f2
    '--color-info-500': '50 141 237',  // #328ded (base)
    '--color-info-600': '42 121 196',  // #2a79c4
    '--color-info-700': '32 101 152',  // #206598
    '--color-info-800': '23 81 122',   // #17517a
    '--color-info-900': '15 61 92',    // #0f3d5c
    '--color-info-950': '10 41 61',    // #0a293d (darkest)


    /* Typography */
    '--color-typography-0': '240 249 250',   // #f0f9fa (lightest, for light backgrounds)
    '--color-typography-50': '220 240 241',  // #dcf0f1
    '--color-typography-100': '190 220 222', // #bedcde
    '--color-typography-200': '160 200 202', // #a0c8ca
    '--color-typography-300': '130 180 182', // #82b4b6
    '--color-typography-400': '110 160 162', // #6ea0a2
    '--color-typography-500': '90 140 142',  // #5a8c8e (base, great for general text)
    '--color-typography-600': '70 120 122',  // #46787a
    '--color-typography-700': '55 100 102',  // #376466
    '--color-typography-800': '40 80 82',    // #285052 (darker, for headings)
    '--color-typography-900': '30 60 61',    // #1e3c3d (darkest, for high contrast text)
    '--color-typography-950': '20 40 41',    // #142829 (darkest, minimal contrast)

    /* Outline */
    '--color-outline-0': '220 240 241',   // #dcf0f1
    '--color-outline-50': '200 220 221',  // #c8dedd
    '--color-outline-100': '180 200 201', // #b4c8c9
    '--color-outline-200': '160 180 181', // #a0b4b5
    '--color-outline-300': '140 160 161', // #8c9fa1
    '--color-outline-400': '120 140 141', // #788c8d
    '--color-outline-500': '100 120 121', // #647879
    '--color-outline-600': '80 100 101',  // #506465
    '--color-outline-700': '60 80 81',    // #3c5051
    '--color-outline-800': '40 60 61',    // #283c3d
    '--color-outline-900': '30 40 41',    // #1e2829
    '--color-outline-950': '20 30 31',    // #141e1f


    /* Background */
    '--color-background-0': '240 249 250',   // #f0f9fa (lightest, for light mode backgrounds)
    '--color-background-50': '220 240 241',  // #dcf0f1
    '--color-background-100': '200 231 232', // #c8e7e8
    '--color-background-200': '180 222 223', // #b4dedf
    '--color-background-300': '160 213 214', // #a0d5d6
    '--color-background-400': '140 204 205', // #8ccccd
    '--color-background-500': '120 185 186', // #78b9ba
    '--color-background-600': '100 166 167', // #64a6a7
    '--color-background-700': '80 147 148',  // #509394
    '--color-background-800': '60 128 129',  // #3c8081
    '--color-background-900': '40 109 110',  // #286d6e
    '--color-background-950': '30 90 91',    // #1e5a5b (darkest, for dark mode backgrounds)

    /* Background Special */
    '--color-background-error': '255 224 224',   // #ffe0e0 (light red for errors)
    '--color-background-warning': '255 239 204', // #ffefcc (soft yellow for warnings)
    '--color-background-success': '220 242 228', // #dcf2e4 (light green for success)
    '--color-background-muted': '230 236 240',   // #e6ecf0 (muted light gray-blue)
    '--color-background-info': '210 235 252',    // #d2ebfc (light blue for information)

    /* Focus Ring Indicator */
    '--color-indicator-primary': '72 161 242',   // #48a1f2 (light blue for primary focus)
    '--color-indicator-info': '50 141 237',      // #328ded (deeper blue for informational focus)
    '--color-indicator-error': '239 68 68',      // #ef4444 (bright red for error focus)
  }),
  dark: vars({
    /* Primary */
    '--color-primary-0': '52 90 91',    // #345a5b (darkest)
    '--color-primary-50': '64 109 111', // #406d6f
    '--color-primary-100': '76 128 131', // #4c8083
    '--color-primary-200': '88 147 151', // #589397
    '--color-primary-300': '100 166 170', // #64a6aa
    '--color-primary-400': '112 185 190', // #70b9be
    '--color-primary-500': '135 205 206', // #87cdce
    '--color-primary-600': '153 213 214', // #99d5d6
    '--color-primary-700': '171 221 222', // #abddde
    '--color-primary-800': '189 229 230', // #bde5e6
    '--color-primary-900': '207 237 238', // #cfedee
    '--color-primary-950': '225 245 246', // #e1f5f6

    /* Secondary */
    '--color-secondary-0': '128 67 32',   // #804320 (darkest)
    '--color-secondary-50': '153 80 38',  // #995026
    '--color-secondary-100': '179 95 44', // #b35f2c
    '--color-secondary-200': '204 110 50', // #cc6e32
    '--color-secondary-300': '230 125 56', // #e67d38
    '--color-secondary-400': '255 139 62', // #ff8b3e
    '--color-secondary-500': '255 169 97', // #ffa961
    '--color-secondary-600': '255 192 129', // #ffc081
    '--color-secondary-700': '255 210 165', // #ffd2a5
    '--color-secondary-800': '255 224 191', // #ffe0bf
    '--color-secondary-900': '255 236 215', // #ffecd7
    '--color-secondary-950': '255 246 237', // #fff6ed

    /* Tertiary */
    '--color-tertiary-0': '108 74 15',    // #6c4a0f (darkest)
    '--color-tertiary-50': '133 91 20',   // #855b14
    '--color-tertiary-100': '158 108 25', // #9e6c19
    '--color-tertiary-200': '184 126 30', // #b87e1e
    '--color-tertiary-300': '210 144 35', // #d29023
    '--color-tertiary-400': '235 162 40', // #eba228
    '--color-tertiary-500': '250 185 50', // #fab932
    '--color-tertiary-600': '255 208 77', // #ffd04d
    '--color-tertiary-700': '255 222 128', // #ffde80
    '--color-tertiary-800': '255 235 179', // #ffebb3
    '--color-tertiary-900': '255 244 204', // #fff4cc
    '--color-tertiary-950': '255 250 230', // #fffaf6

    /* Error */
    '--color-error-0': '66 12 12',    // #420c0c (darkest)
    '--color-error-50': '83 19 19',   // #531313
    '--color-error-100': '127 29 29', // #7f1d1d
    '--color-error-200': '153 27 27', // #991b1b
    '--color-error-300': '185 28 28', // #b91c1c
    '--color-error-400': '220 38 38', // #dc2626
    '--color-error-500': '239 68 68', // #ef4444
    '--color-error-600': '248 102 102', // #f86666
    '--color-error-700': '252 147 147', // #fc9393
    '--color-error-800': '253 191 191', // #fdbfbf
    '--color-error-900': '254 223 223', // #fedefd
    '--color-error-950': '255 238 238', // #ffeeee

    /* Success */
    '--color-success-0': '15 61 35',    // #0f3d23 (darkest)
    '--color-success-50': '23 81 47',   // #17512f
    '--color-success-100': '32 101 60', // #20653c
    '--color-success-200': '42 121 72', // #2a7948
    '--color-success-300': '56 150 98', // #389662
    '--color-success-400': '72 179 125', // #48b37d
    '--color-success-500': '98 196 142', // #62c48e
    '--color-success-600': '126 207 162', // #7ecfa2
    '--color-success-700': '154 218 182', // #9adab6
    '--color-success-800': '182 229 202', // #b6e5ca
    '--color-success-900': '210 240 222', // #d2f0de
    '--color-success-950': '228 250 238', // #e4faee

    /* Warning */
    '--color-warning-0': '102 47 12',   // #662f0c (darkest)
    '--color-warning-50': '127 59 15',  // #7f3b0f
    '--color-warning-100': '152 71 19', // #984713
    '--color-warning-200': '178 84 23', // #b25417
    '--color-warning-300': '204 98 27', // #cc621b
    '--color-warning-400': '231 113 32', // #e77120
    '--color-warning-500': '250 139 38', // #fa8b26
    '--color-warning-600': '252 169 64', // #fca940
    '--color-warning-700': '254 198 111', // #fec66f
    '--color-warning-800': '255 223 166', // #ffdfa6
    '--color-warning-900': '255 239 204', // #ffefcc
    '--color-warning-950': '255 249 234', // #fff9ea

    /* Info */
    '--color-info-0': '10 41 61',   // #0a293d (darkest)
    '--color-info-50': '15 61 92',  // #0f3d5c
    '--color-info-100': '23 81 122', // #17517a
    '--color-info-200': '32 101 152', // #206598
    '--color-info-300': '42 121 196', // #2a79c4
    '--color-info-400': '50 141 237', // #328ded
    '--color-info-500': '72 161 242', // #48a1f2
    '--color-info-600': '100 181 246', // #64b5f6
    '--color-info-700': '140 201 248', // #8cc9f8
    '--color-info-800': '180 221 250', // #b4ddfa
    '--color-info-900': '210 235 252', // #d2ebfc
    '--color-info-950': '235 248 254', // #ebf8fe

    /* Background Special */
    '--color-background-error': '83 19 19',    // #531313 (dark red for errors)
    '--color-background-warning': '127 59 15', // #7f3b0f (muted dark orange for warnings)
    '--color-background-success': '23 81 47',  // #17512f (dark green for success)
    '--color-background-muted': '52 90 91',    // #345a5b (dark muted teal)
    '--color-background-info': '15 61 92',     // #0f3d5c (dark blue for information)

    /* Focus Ring Indicator */
    '--color-indicator-primary': '100 166 170',  // #64a6aa (soft teal for primary focus)
    '--color-indicator-info': '50 141 237',      // #328ded (bright blue for informational focus)
    '--color-indicator-error': '185 28 28',      // #b91c1c (vivid red for error focus)

  }),
};

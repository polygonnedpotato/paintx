//Resources for PaintX
const r={
  install:{
    firstInstall:[["px_language","en_us"],["debug_debugmode",true],["px_textEncoding","UTF-8"],["ui_theme","paintx_default"],["ui_colorscheme","paintx_dark"],["debug_flags",'{"00":true,"01":"Untitled"}']],
  },
  meta:{
    dev:{
      todo:"[TODO] Use actual icons for pwa.\n[TODO] Use IndexedDB for undo cache, save storage, ect.\n[TODO] Improve portability.\n[TODO] Implement new styling themes.\n[TODO] Implement new color schemes.\n[TODO] Implement dialogs.\n[TODO] Implement metadata editor.",
      gh:"github.com/polygonnedpotato/paintx"
    },
    icon:{
      favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAADuklEQVR4Xu3TAQ0AQAzCwM2/6H3yNno4oNC9mRtBIEpgCRBdXu1PgACOkCZAgPT8yhPAB9IECJCeX3kC+ECaAAHS8ytPAB9IEyBAen7lCeADaQIESM+vPAF8IE2AAOn5lSeAD6QJECA9v/IE8IE0AQKk51eeAD6QJkCA9PzKE8AH0gQIkJ5feQL4QJoAAdLzK08AH0gTIEB6fuUJ4ANpAgRIz688AXwgTYAA6fmVJ4APpAkQID2/8gTwgTQBAqTnV54APpAmQID0/MoTwAfSBAiQnl95AvhAmgAB0vMrTwAfSBMgQHp+5QngA2kCBEjPrzwBfCBNgADp+ZUngA+kCRAgPb/yBPCBNAECpOdXngA+kCZAgPT8yhPAB9IECJCeX3kC+ECaAAHS8ytPAB9IEyBAen7lCeADaQIESM+vPAF8IE2AAOn5lSeAD6QJECA9v/IE8IE0AQKk51eeAD6QJkCA9PzKE8AH0gQIkJ5feQL4QJoAAdLzK08AH0gTIEB6fuUJ4ANpAgRIz688AXwgTYAA6fmVJ4APpAkQID2/8gTwgTQBAqTnV54APpAmQID0/MoTwAfSBAiQnl95AvhAmgAB0vMrTwAfSBMgQHp+5QngA2kCBEjPrzwBfCBNgADp+ZUngA+kCRAgPb/yBPCBNAECpOdXngA+kCZAgPT8yhPAB9IECJCeX3kC+ECaAAHS8ytPAB9IEyBAen7lCeADaQIESM+vPAF8IE2AAOn5lSeAD6QJECA9v/IE8IE0AQKk51eeAD6QJkCA9PzKE8AH0gQIkJ5feQL4QJoAAdLzK08AH0gTIEB6fuUJ4ANpAgRIz688AXwgTYAA6fmVJ4APpAkQID2/8gTwgTQBAqTnV54APpAmQID0/MoTwAfSBAiQnl95AvhAmgAB0vMrTwAfSBMgQHp+5QngA2kCBEjPrzwBfCBNgADp+ZUngA+kCRAgPb/yBPCBNAECpOdXngA+kCZAgPT8yhPAB9IECJCeX3kC+ECaAAHS8ytPAB9IEyBAen7lCeADaQIESM+vPAF8IE2AAOn5lSeAD6QJECA9v/IE8IE0AQKk51eeAD6QJkCA9PzKE8AH0gQIkJ5feQL4QJoAAdLzK08AH0gTIEB6fuUJ4ANpAgRIz688AXwgTYAA6fmVJ4APpAkQID2/8gTwgTQBAqTnV54APpAmQID0/MoTwAfSBAiQnl95AvhAmgAB0vMrTwAfSBMgQHp+5QngA2kCBEjPrzwBfCBNgADp+ZUngA+kCRAgPb/yD0sBf1B56a2/AAAAAElFTkSuQmCC"
    }
  },
  style:{
    themes:[
      {
        name:"paintx_default",
        cur_default:["image/svg+xml","<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 15.635 26.721\" width=\"15.635\" height=\"26.721\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M 0 0 L 0 13.36 L 0 26.721 L 5.558 16.731 L 15.635 20.244 L 7.817 10.122 L 0 0 Z\" style=\"fill: rgb(110, 110, 110); stroke: rgb(255, 255, 255);\"/>\n</svg>"]
      }
    ],
    colorschemes:[
      {
        name:"paintx_light",
        main:"#0D00FF",
        back:"#FFFFFF"
      },
      {
        name:"paintx_dark",
        main:"#FF7D00",
        back:"#000000"
      }
    ]
  }
}
const s={
  en_us:{
    paintx_title:"PaintX",
    error_occur:"An error occured...",
    error_px000_name:"Unknown error",
    error_px000_desc:"An unknown error occured.",
    error_px001_name:"Not enough storage",
    error_px001_desc:"Your system does not have enough storage space to run PaintX.",
    error_px002_name:"Invalid Format",
    error_px002_desc:"The file format is invalid.",
    error_px003_name:"Service Workers Disabled",
    error_px003_desc:"Your browser either does not support Service Workers, or have disabled Service Workers alltogether. PaintX uses a Service Worker to cache itself to run faster and to run offline.",
    ui_prompt_confirm:"Confirm",
    ui_prompt_decline:"Decline",
    ui_prompt_ok:"OK",
    ui_prompt_cancel:"Cancel",
    ui_prompt_y:"Yes",
    ui_prompt_n:"No",
    ui_prompt_savefirst:"Do you wish save first?",
    ui_theme_paintx_default:"PaintX",
    ui_colorscheme_paintx_light:"PaintX Light",
    ui_colorscheme_paintx_dark:"PaintX Dark",
    ui_topbar_filemenu:"File",
    ui_topbar_filemenu_new:"New file",
    ui_topbar_filemenu_load:"Load file",
    ui_topbar_filemenu_save:"Save",
    ui_topbar_filemenu_saveas:"Save as...",
    ui_topbar_filemenu_filemeta:"Properties",
    ui_topbar_filemenu_quit:"Quit",
    ui_topbar_editmenu:"Edit",
    ui_topbar_editmenu_copy:"Copy",
    ui_topbar_editmenu_cut:"Cut",
    ui_topbar_editmenu_paste:"Paste",
    ui_topbar_helpmenu:"Help",
    ui_topbar_helpmenu_about:"About",
    misc_loading:"Loading..."
  }
}
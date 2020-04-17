<template>
    <div class="IconFonts">
        <span :class="class1" style="width: 30px;" :style="{'color': Color+' !important'}"></span>
    </div>
</template>
<script>
export default {
    name: 'IconFonts',
    props: {
        class1 : String,
        Color : String,
    }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'icomoon';
  src:  url('../assets/fonts/icomoon.eot?laule8');
  src:  url('../assets/fonts/icomoon.eot?laule8#iefix') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?laule8') format('truetype'),
    url('../assets/fonts/icomoon.woff?laule8') format('woff'),
    url('../assets/fonts/icomoon.svg?laule8#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: 24px !important;
  // margin-right: -20px;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-transfer:before {
  content: "\e900";
}
.icon-payment:before {
  content: "\e901";

}
.icon-the-bank:before {
  content: "\e902";

}
.icon-monitoring:before {
  content: "\e903";

}
.icon-mycards:before {
  content: "\e904";

}
.icon-home:before {
  content: "\e905";

}
.icon-loans:before {
  content: "\e906";

}
.icon-express:before {
  content: "\e907";

}
.icon-exchange-rates:before {
  content: "\e908";

}
.icon-exchange:before {
  content: "\e909";

}
.icon-accounts:before {
  content: "\e90a";

}
.icon-deposits:before {
  content: "\e90b";

}
.icon-union:before {
  content: "\e90c";

}
.icon-union1:before {
  content: "\e90d";

}

</style>
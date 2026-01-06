<!-- Alignment update only.
     Behaviour, geometry, dot logic unchanged.

     Goal:
     1) Title + left mid value aligned with LEFT EDGE of the bar
     2) Right mid (risk) aligned with RIGHT EDGE of the bar

     Bar geometry (unchanged, already correct):
       LEFT  = 35.53px
       RIGHT = 414.47px
-->

<style>
  /* shared constants via CSS custom properties */
  .index-box{
    --bar-left: 35.53px;
    --bar-right: 414.47px;

    position:relative;
    width:450px;
    height:150px;
    background-repeat:no-repeat;
    background-size:450px 150px;
    font-family:system-ui,-apple-system,sans-serif;
  }

  /* TITLE — align to bar start */
  .box-title{
    position:absolute;
    top:18px;
    left:var(--bar-left);
    right:auto;
    font-size:15px;
    font-weight:500;
    color:#d9d9d9;
    line-height:1.2;
    z-index:2;
  }

  /* LEFT MID VALUE — align to bar start */
  .mid-left{
    position:absolute;
    top:44%;
    left:var(--bar-left);
    transform:translateY(-50%);
    font-size:17px;
    font-weight:500;
    color:#d9d9d9;
    z-index:2;
    text-align:left;
  }

  /* RIGHT MID (RISK) — align to bar end */
  .mid-right{
    position:absolute;
    top:44%;
    left:var(--bar-right);
    transform:translateY(-50%);
    font-size:15px;
    color:#d9d9d9;
    z-index:2;
    white-space:nowrap;
    text-align:right;
    translate:-100% 0; /* anchor text end to bar-right */
  }
</style>

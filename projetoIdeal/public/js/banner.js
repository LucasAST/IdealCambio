function abre_banner()
{
   var banner_obj = document.getElementById('banner_popup');
   banner_obj.style.right = '0px';
   banner_obj.style.top = '45%';
   banner_obj.style.display = 'block';
   banner_obj.style.backgroundColor = '#ffc200';
   banner_obj.style.position = 'fixed';
   banner_obj.style.padding= '4px';
   banner_obj.style.width = '45px';
   banner_obj.style.height = '60px';
   banner_obj.style.styleFloat = 'right';
   banner_obj.style.zIndex = '500';
   banner_obj.style.borderRadius  = '10px 0px 0px 10px';
   banner_obj.style.MozBorderRadius   = '4px 0px 0px 4px';
}
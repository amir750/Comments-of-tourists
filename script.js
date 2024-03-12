const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')


const testimonials=[{
    name: 'Miyah Myles',
    position: 'torist',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      'مردم ایران بسیار خونگرم و مهمان نواز هستند و این ویژگی آنها تنها دلیلی است که باعث می شود  من دوباره سفری به ایران داشته باشم',
}
,{
  name:'June Cha',
  position:'torist',  
  photo:'https://randomuser.me/api/portraits/women/47.jpg',

  text:'ایرانیان عرب نیستند، بلکه متعلق به فرهنگ فارسی هستند، ایران یکی از مهمترین و تحسین برانگیزترین نقاط روی زمین و یکی از غنی ترین سنت های تاریخ بشریت است'
}
,{
    name:'Iida Niskanen',
    position:'torist',  
    photo:'https://randomuser.me/api/portraits/women/49.jpg',
    text:'همه می خواهند برای سفر به برج ایفل به پاریس سفر کنند، اما شخصاً، من می خواهم به ایران سفر کنم و از سایت های تاریخی ایرانی دیدن کنم'
  }
  ,{
    name:'Renee Sims',
    position:'torist',  
    photo:'https://randomuser.me/api/portraits/women/48.jpg',
    text:'ایرانیان زیر یک چادر در بیابان زندگی می کنند: نمیدانم این تصور از کی و چگونه در ذهن تعدادی از مردم دنیا به وجود آمده است. اما چیزی که مشهود است این است که همچین چیزی واقعیت ندارد و زندگی در ایران مانند بسیاری از کشورهای دنیا جریان عادی خود را دارد'
  }]

  let x=1
  function updateTestimonial() {
    const {name,position,photo,text}=testimonials[x]
    
    testimonial.innerHTML=text
    username.innerHTML=name
    userImage.src=photo
    role.innerHTML=position
    x++;
    if(x>testimonials.length-1){
        x=0
    }
  }
setInterval(updateTestimonial,10000)
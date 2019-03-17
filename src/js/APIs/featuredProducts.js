export default new Promise((resolve ,reject)=>{
  setTimeout(() => {
      resolve([
        {
          id : 'flamingo-001',
          img_url:'/public/assets/images/products/Homepage-BelowFold-ShaveSet-edit.jpg',
          title: 'shave set',
          price :'16.00',
          desc:'Because shaving starts with a well-designed razor and happy skin.'
        },
        {
          id: 'flamingo-002',
          img_url:'/public/assets/images/products/Homepage-BelowFold-FaceWax-edit.jpg',
          title: 'face wax kit',
          price: '10.00',
          desc: 'Because we have mustaches too.'
        },
        {
          id: 'flamingo-003',
          img_url:'/public/assets/images/products/Homepage-BelowFold-BodyWax-edit.jpg',
          title: 'body wax kit',
          price: '10.00',
          desc: 'Because you don’t have to have hair there.'
        }
      ])
  }, 1500);
});
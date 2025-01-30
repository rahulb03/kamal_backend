export default {
  async getAlerts(ctx) {
    const threshold = ctx.query.threshold || 10;

    const lowStockProducts = await strapi.entityService.count('api::product.product', {
      filters: { stock: { $lt: Number(threshold) } },
      // populate: { category: true },
    });

    const totalCategories = await strapi.entityService.count('api::category.category');


    const totalProduct = await strapi.entityService.count('api::product.product');

  //   const products  = await strapi.entityService.findMany('api::product.product' , {
      
  // populate : "*"
  //   })

    // console.log(products)
    // console.log(products)
//  const u = new Set(products.map((product) => product?.category?.name));
    // const products = await strapi.entityService.findMany('api::product.product', {
    //   populate: '*',
    // });

    // const uniqueCategoryIds = new Set(products.map((product) => product));
    // const totalTypesOfProducts = uniqueCategoryIds.size;

   

   
   

     // Map products to extract the category IDs
    

    ctx.send({
      lowStockProducts,
      totalCategories,
      totalProduct
      // stockAlertThreshold: threshold,
      // totalTypesOfProducts,
    });
  },
};

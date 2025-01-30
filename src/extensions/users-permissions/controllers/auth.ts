module.exports = {
    async register(ctx) {
      const { username, email, password, organization } = ctx.request.body;
  
      if (!organization) {
        return ctx.badRequest('Organization is required');
      }
  
      const existingUser = await strapi.query('plugin::users-permissions.user').findOne({ where: { email } });
  
      if (existingUser) {
        return ctx.badRequest('Email is already taken');
      }
  
      const newUser = await strapi.plugins['users-permissions'].services.user.add({
        username,
        email,
        password,
        organization, // Now organization will be stored
      });
  
      return newUser;
    },
  };
  
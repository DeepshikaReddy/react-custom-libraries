// import React from 'react';
// import Footer from './Footer';

// export default {
//   title: 'Footer',
//   component: Footer,
// };

// const Template = (args) => <Footer {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Primary Button',
// };


import React from 'react';
import Footer from '../components/Requirements/Footer';

export default {
  title: 'Footer',
  component: Footer,
};

export const WithTextFooter = () => <Footer label ="Im Standard Footer" color="green" />;
export const DefaultFooter = () => <Footer label ="Im Default Footer" color="yellow" />;


const NavBarTitle = ({ text }: { text: String }) => (
  <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
    <span className="text-xl text-gray-800 font-semibold font-heading">
      {text}
    </span>
  </div>
);

export default NavBarTitle;

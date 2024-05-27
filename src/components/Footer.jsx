import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center md:text-left md:flex md:justify-between">
        <div className="mb-4 md:mb-0 w-1/3">
          <h2 className="text-2xl font-bold mb-2">Company Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ab
            esse, dolores eius inventore, eligendi non atque numquam illo
            necessitatibus vitae placeat quasi optio accusantium. Itaque quia
            tempora dolore iure.
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start">
            <a href="#" className="hover:underline mx-2">
              Facebook
            </a>
            <a href="#" className="hover:underline mx-2">
              Twitter
            </a>
            <a href="#" className="hover:underline mx-2">
              Instagram
            </a>
            <a href="#" className="hover:underline mx-2">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="my-5 text-center">© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

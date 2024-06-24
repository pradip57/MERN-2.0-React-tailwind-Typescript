// import { ReactNode, useState } from "react";

// const Lists = (): ReactNode => {
//   let [toggle, setToggle] = useState(true);

//   const showDropDown = (e: any) => {
//     e.preventDefault();

//     setToggle(!toggle);
//   };
//   let [toggle0, setToggle0] = useState(true);

//   const showDropDown0 = (e: any) => {
//     e.preventDefault();

//     setToggle0(!toggle0);
//     if (!toggle1) {
//       setToggle1(!toggle1);
//     }

//     if (!toggle2) {
//       setToggle2(!toggle2);
//     }

//     if (!toggle3) {
//       setToggle3(!toggle3);
//     }
//   };

//   let [toggle1, setToggle1] = useState(true);

//   const showDropDown1 = (e: any) => {
//     e.preventDefault();
//     setToggle1(!toggle1);
//     if (!toggle0) {
//       setToggle0(!toggle0);
//     }

//     if (!toggle2) {
//       setToggle2(!toggle2);
//     }

//     if (!toggle3) {
//       setToggle3(!toggle3);
//     }
//   };

//   let [toggle2, setToggle2] = useState(true);

//   const showDropDown2 = (e: any) => {
//     e.preventDefault();
//     setToggle2(!toggle2);
//     if (!toggle1) {
//       setToggle1(!toggle1);
//     }

//     if (!toggle0) {
//       setToggle0(!toggle0);
//     }

//     if (!toggle3) {
//       setToggle3(!toggle3);
//     }
//   };
//   let [toggle3, setToggle3] = useState(true);

//   const showDropDown3 = (e: any) => {
//     e.preventDefault();
//     setToggle3(!toggle3);
//     if (!toggle1) {
//       setToggle1(!toggle1);
//     }

//     if (!toggle0) {
//       setToggle0(!toggle0);
//     }

//     if (!toggle2) {
//       setToggle2(!toggle2);
//     }
//   };

//   return (
//     <>
//       <li className="relative list-none">
//         <button
//           onClick={showDropDown}
//           id="dropdownNavbarLink"
//           data-dropdown-toggle="dropdownNavbar"
//           className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//         >
//           Categories{" "}
//           <svg
//             className="w-2.5 h-2.5 ms-2.5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </button>

//         <div
//           id="dropdownNavbar"
//           className={`absolute left-0 z-10 mt-2 ${
//             toggle ? "hidden" : ""
//           } font-normal bg-white divide-y divide-red-700 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
//         >
//           <ul
//             className="py-2 text-sm text-red-700 dark:text-gray-600"
//             aria-labelledby="dropdownLargeButton"
//           >
//             <li aria-labelledby="dropdownNavbarLink" className="relative">
//               <button
//                 onClick={showDropDown0}
//                 id="doubleDropdownButton"
//                 data-dropdown-toggle="doubleDropdown"
//                 data-dropdown-placement="right-start"
//                 type="button"
//                 className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Clothes
//                 <svg
//                   className="w-2.5 h-2.5 ms-2.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button>
//               <div
//                 id="doubleDropdown"
//                 className={`absolute left-full top-0 z-10 ${
//                   toggle0 ? "hidden" : ""
//                 } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="doubleDropdownButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Shirts
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Pants
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Jackets
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Hoodi
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li aria-labelledby="dropdownNavbarLink" className="relative">
//               <button
//                 onClick={showDropDown1}
//                 id="doubleDropdownButton"
//                 data-dropdown-toggle="doubleDropdown"
//                 data-dropdown-placement="right-start"
//                 type="button"
//                 className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Electronics
//                 <svg
//                   className="w-2.5 h-2.5 ms-2.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button>
//               <div
//                 id="doubleDropdown"
//                 className={`absolute left-full top-0 z-10 ${
//                   toggle1 ? "hidden" : ""
//                 } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="doubleDropdownButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Mobiles
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Laptops
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Televisions
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Fans
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li aria-labelledby="dropdownNavbarLink" className="relative">
//               <button
//                 onClick={showDropDown2}
//                 id="doubleDropdownButton"
//                 data-dropdown-toggle="doubleDropdown"
//                 data-dropdown-placement="right-start"
//                 type="button"
//                 className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Furnitures
//                 <svg
//                   className="w-2.5 h-2.5 ms-2.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button>
//               <div
//                 id="doubleDropdown"
//                 className={`absolute left-full top-0 z-10 ${
//                   toggle2 ? "hidden" : ""
//                 } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="doubleDropdownButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Table
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Chair
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Bed
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Doors
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li aria-labelledby="dropdownNavbarLink" className="relative">
//               <button
//                 onClick={showDropDown3}
//                 id="doubleDropdownButton"
//                 data-dropdown-toggle="doubleDropdown"
//                 data-dropdown-placement="right-start"
//                 type="button"
//                 className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Utensils
//                 <svg
//                   className="w-2.5 h-2.5 ms-2.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button>
//               <div
//                 id="doubleDropdown"
//                 className={`absolute left-full top-0 z-10 ${
//                   toggle3 ? "hidden" : ""
//                 } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="doubleDropdownButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Pressure Cookers
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Pans
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Plates
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Glass
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </li>
//     </>
//   );
// };

// export default Lists;

import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SpokeIcon from '@mui/icons-material/Spoke';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Logo from "../../assets/logo/linkedin-logo.png";
import profile from "../../assets/background/hacker.jpg"
import AddchartIcon from '@mui/icons-material/Addchart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavLinks from "./Navlinks";

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className="bg-primary md:text-white text-black sticky top-0 w-full">
				<div className="container mx-auto flex items-center font-medium justify-between">
					<div className="z-50 p-5 md:w-auto w-full flex justify-between">
						<form class="flex gap-2 items-center">
							<img src={Logo} alt="logo" className="md:cursor-pointer h-8" />
							<label for="simple-search" class="sr-only">
								Search
							</label>
							<div class="relative w-full">
								<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										></path>
									</svg>
								</div>
								<input
									type="text"
									id="simple-search"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5 rounded  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search"
									required=""
								/>
							</div>
						</form>

						<div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
							{open ? (
								<CloseIcon className="text-white" />
							) : (
								<MenuIcon className="text-white" />
							)}
						</div>
					</div>
					<ul className="md:flex hidden items-center gap-3 font-[Poppins]">
						<div class=" h-full flex justify-center items-center ">
							<ul class=" h-full flex justify-center items-center">
								<li class="h-full border-b-2 border-black">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white p-1 px-2 ">

										<HomeIcon />

										<span className="text-sm font-normal">Home</span>
									</a>
								</li>

								<li class="h-full">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white hover:text-black p-1 px-2"
									>
										<SpokeIcon />

										<span className="text-sm font-normal">My Network</span>
									</a>
								</li>

								<li class="h-full">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white hover:text-black p-1   px-2"
									>
										<WorkIcon />

										<span className="text-sm font-normal">Jobs</span>
									</a>
								</li>

								<li class="h-full">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white hover:text-black p-1  px-2"
									>
										<div class=" inline-flex  relative w-fit">
											<div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">69</div>
										
												<div>
													<SmsIcon/>
												</div>
												
										</div>
										<span className="text-sm font-normal">Messaging</span>


										
									</a>
								</li>

								<li class="h-full">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white hover:text-black p-1  px-2"
									>
										<div class=" inline-flex  relative w-fit">
											<div class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">69</div>
										
												<div>
													<SmsIcon/>
												</div>
												
										</div>
										<span className="text-sm font-normal">Notification</span>


										
									</a>
								</li>

								<li class="h-full">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white hover:text-black p-1  px-2"
									>
										<img
											src={profile}
											alt="Me"
											className="h-10 w-10 -mt-3 rounded-full"
										/>

										<span className="text-sm font-normal">
											Me
											<ArrowDropDownIcon/>
										</span>
									</a>
								</li>

								<li class="h-full  border-l-2 border-gray-300">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white hover:text-black p-1  px-2"
									>
										<WidgetsIcon/>
										<span className="text-sm font-normal">
											Work
											
										</span>
									</a>
								</li>
								<li class="h-full ">
									<a
										href="#"
										class="h-full flex flex-col justify-between items-center text-center text-white hover:text-black p-1  px-2"
									>
<AddchartIcon/>
										<span className="text-sm font-normal">
											Post a job for free
										
										</span>
									</a>
								</li>
							</ul>

						
						</div>
					</ul>

					{/* Mobile nav */}
					<ul
						className={`
        md:hidden bg-white fixed w-full top-20 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
					>
						<NavLinks />
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

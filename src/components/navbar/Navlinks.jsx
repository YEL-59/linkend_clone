import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navlinks = () => {
	const [heading, setHeading] = useState('');
	const [subHeading, setSubHeading] = useState('');
	return (
		<>
			{links.map((link) => (
				<div>
					<div className="px-2 text-left md:cursor-pointer group">
						<li
							className="py-3 flex justify-between items-center md:pr-0  group"
							onClick={() => {
								heading !== link.name ? setHeading(link.name) : setHeading('');
								setSubHeading('');
							}}
						>
							<Link to={link.menuLink}>{link.name}</Link>

							{link.submenu === false ? (
								''
							) : (
								<span className="text-xl  md:ml-2  md:block hidden group-hover:rotate-180">
									<ExpandMoreIcon />
								</span>
							)}
							{link.submenu === false ? (
								''
							) : (
								<span className="text-xl md:hidden inline">{heading === link.name ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
							)}
						</li>
						{link.submenu && (
							<div>
								<div className="bg-white text-black px-2 py-2 shadow-xl absolute top-15 mx-auto hidden group-hover:md:block hover:md:block">
									<div className="gap-5 grid grid-flow-row grid-cols-2">
										{link.sublinks.map((mysublinks) => (
											<div className="">
												<h1 className="text-lg font-bold">{mysublinks.Head}</h1>
												{mysublinks.sublink.map((slink) => (
													<li className="text-sm  my-2.5">
														<Link to={slink.link} className="">
															{slink.name}
														</Link>
													</li>
												))}
											</div>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
					{/* Mobile menus */}
					<div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
						{/* sublinks */}
						{link.sublinks.map((slinks) => (
							<div>
								<div>
									<h1
										onClick={() => (subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading(''))}
										className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
									>
										{slinks.Head}

										{slinks.Head === '' ? (
											''
										) : (
											<span className="text-xl md:mt-1 md:ml-2 inline">
												{heading === link.name ? <ExpandMoreIcon /> : <ExpandLessIcon />}
											</span>
										)}
									</h1>
									<div className={`${subHeading === slinks.Head ? 'md:hidden' : 'hidden'}`}>
										{slinks.sublink.map((slink) => (
											<li className="py-2 pl-14">
												<Link to={slink.link}>{slink.name}</Link>
											</li>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default Navlinks;

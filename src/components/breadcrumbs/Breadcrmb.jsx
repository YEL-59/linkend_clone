import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Breadcrmb() {
	return (
		<div className="w-full bg-breadbg bg-no-repeat bg-cover">
			<div className="container mx-auto rounded-md py-16">
				<h1 className="text-white text-4xl mb-5 ">Home</h1>
				<ol className="list-reset flex text-white">
					<li className="flex items-center text-white mb-5 gap-2">
						<HomeIcon />
						<a href="/" className="">
							Home
						</a>
					</li>

					<li>
						<span className=" mx-2">
							<ArrowForwardIosIcon fontSize="normal" />
						</span>
					</li>
					<li className="">Data</li>
				</ol>
			</div>
		</div>
	);
}

export default Breadcrmb;

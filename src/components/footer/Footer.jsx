import React from 'react';
import Link from '../../data/footer.json';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DraftsIcon from '@mui/icons-material/Drafts';
import Logo from '../../assets/logo/linkedin-logo.png';
function Footer() {
	const d = new Date();
	return (
		<div className="w-full  bg-primary text-white mt-20">
			<div className="container  mx-auto p-5">
				<div className="flex justify-between flex-col md:flex-row gap-5">
					<div className="flex flex-col gap-5 max-w-sm">
						<img className="w-[50%]" src={Logo} alt="" />
						<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime molestias</div>
						<div>icon</div>
					</div>
					{Link &&
						Link.map((item) => {
							return (
								<ul key={item.id}>
									<h1 className="md:text-lg text-md font-bold mb-5"> {item.name}</h1>

									{item.subname.map((data) => (
										<li className="md:text-sm text-xsm mb-1" key={data.id}>
											<a href={data.link}>{data.name}</a>
										</li>
									))}
								</ul>
							);
						})}
						
					<ul className="md:w-[300px]">
						<h1 className="md:text-lg text-md font-bold mb-5"> Dhaka Office</h1>
						<span className="flex items-center gap-2">
							<MapsHomeWorkIcon />
							<li className="md:text-sm text-xsm mb-2">House #06, Road #104, Gulshan-2, Dhaka-1212, Bangladesh</li>
						</span>
						<span className="flex items-center gap-2">
							<PhoneEnabledIcon />
							<li className="md:text-sm text-xsm mb-2">+8801888042370</li>
						</span>
						<span className="flex items-center gap-2">
							<DraftsIcon />
							<li className="md:text-sm text-xsm mb-2">Info@rexoit.com</li>
						</span>
					</ul>
					<ul className="md:w-[300px]">
						<h1 className="md:text-lg text-md font-bold mb-5"> Cumilla Office</h1>
						<span className="flex items-center gap-2">
							<MapsHomeWorkIcon />
							<li className="md:text-sm text-xsm mb-2">1030/GHA, Police Lines Rd, Jhautola, (Near Jhautala Jame Masjid), Cumilla</li>
						</span>
						<span className="flex items-center gap-2">
							<PhoneEnabledIcon />
							<li className="md:text-sm text-xsm mb-2">+8801888042370</li>
						</span>
						<span className="flex items-center gap-2">
							<DraftsIcon />
							<li className="md:text-sm text-xsm mb-2">Info@rexoit.com</li>
						</span>
					</ul>
				</div>
			</div>
			<div className="md:text-sm text-xsm  text-center bg-secondary w-full">
				<div className="text-center py-5">Copyright &copy; {d.getFullYear()} All right reserved </div>
			</div>
		</div>
	);
}

export default Footer;

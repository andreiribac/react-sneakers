import React from 'react';

export const IconSvgSelector = ({ id, ...props }) => {
	switch (id) {
		case 'arrow':
			return (
				<svg {...props} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);

		case 'btn-checked':
			return (
				<svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="32" height="32" rx="8" fill="url(#paint1_linear)" />
					<g clipPath="url(#clip0)">
						<g filter="url(#filter0_d)">
							<path d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z" fill="white" />
						</g>
					</g>
					<defs>
						<filter id="filter0_d" x="10.6665" y="11.3298" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
							<feOffset dy="2" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
						</filter>
						<linearGradient id="paint1_linear" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
							<stop stopColor="#89F09C" />
							<stop offset="1" stopColor="#3CC755" />
						</linearGradient>
						<clipPath id="clip0">
							<rect width="10.6667" height="10.6667" fill="white" transform="translate(10.6667 10.6667)" />
						</clipPath>
					</defs>
				</svg>
			);

		case 'btn-plus':
			return (
				<svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
					<path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
				</svg>
			);

		case 'btn-remove':
			return (
				<svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
					<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
				</svg>
			);

		case 'cart':
			return (
				<svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9117 7.99735 16.5454 7.54548 16.5454C7.09361 16.5454 6.72729 16.9117 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9117 16.9973 16.5454 16.5455 16.5454C16.0936 16.5454 15.7273 16.9117 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			);

		case 'heart':
			return (
				<svg {...props} width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z" fill="#9B9B9B" />
				</svg>
			);

		case 'liked':
			return (
				<svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="32" height="32" rx="7" fill="#FEF0F0" />
					<path d="M23.6129 11.869C23.3646 11.3076 23.0067 10.7988 22.5591 10.3712C22.1111 9.94231 21.583 9.60147 21.0033 9.36723C20.4023 9.12337 19.7577 8.99855 19.1068 9.00001C18.1938 9.00001 17.3029 9.24422 16.5288 9.70551C16.3435 9.81585 16.1676 9.93705 16.0009 10.0691C15.8342 9.93705 15.6583 9.81585 15.4731 9.70551C14.6989 9.24422 13.8081 9.00001 12.895 9.00001C12.2375 9.00001 11.6004 9.12302 10.9985 9.36723C10.4169 9.6024 9.89281 9.94067 9.44276 10.3712C8.99455 10.7983 8.63651 11.3072 8.38893 11.869C8.1315 12.4533 8 13.0738 8 13.7124C8 14.3147 8.12594 14.9424 8.37597 15.581C8.58525 16.1146 8.88529 16.6682 9.26866 17.2272C9.87614 18.1117 10.7114 19.0343 11.7486 19.9695C13.4673 21.5198 15.1693 22.5907 15.2416 22.6341L15.6805 22.9091C15.875 23.0303 16.125 23.0303 16.3195 22.9091L16.7584 22.6341C16.8306 22.5889 18.5308 21.5198 20.2514 19.9695C21.2886 19.0343 22.1238 18.1117 22.7313 17.2272C23.1147 16.6682 23.4166 16.1146 23.624 15.581C23.874 14.9424 24 14.3147 24 13.7124C24.0018 13.0738 23.8703 12.4533 23.6129 11.869V11.869Z" fill="url(#paint0_linear)" />
					<defs>
						<linearGradient id="paint0_linear" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
							<stop stopColor="#FFB0B0" />
							<stop offset="1" stopColor="#FF4343" />
						</linearGradient>
					</defs>
				</svg>
			);

		case 'plus':
			return (
				<svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3" />
				</svg>
			);

		case 'search':
			return (
				<svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" />
				</svg>
			);

		case 'unliked':
			return (
				<svg {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
					<rect width="32" height="32" rx="7" fill="white" stroke="#F8F8F8" />
					<path d="M23.6129 11.869C23.3646 11.3076 23.0067 10.7988 22.5591 10.3712C22.1111 9.94231 21.583 9.60147 21.0033 9.36723C20.4023 9.12337 19.7577 8.99855 19.1068 9.00001C18.1938 9.00001 17.3029 9.24422 16.5288 9.70551C16.3435 9.81585 16.1676 9.93705 16.0009 10.0691C15.8342 9.93705 15.6583 9.81585 15.4731 9.70551C14.6989 9.24422 13.8081 9.00001 12.895 9.00001C12.2375 9.00001 11.6004 9.12302 10.9985 9.36723C10.4169 9.6024 9.89281 9.94067 9.44276 10.3712C8.99455 10.7983 8.63651 11.3072 8.38893 11.869C8.1315 12.4533 8 13.0738 8 13.7124C8 14.3147 8.12594 14.9424 8.37597 15.581C8.58525 16.1146 8.88529 16.6682 9.26866 17.2272C9.87614 18.1117 10.7114 19.0343 11.7486 19.9695C13.4673 21.5198 15.1693 22.5907 15.2416 22.6341L15.6805 22.9091C15.875 23.0303 16.125 23.0303 16.3195 22.9091L16.7584 22.6341C16.8306 22.5889 18.5308 21.5198 20.2514 19.9695C21.2886 19.0343 22.1238 18.1117 22.7313 17.2272C23.1147 16.6682 23.4166 16.1146 23.624 15.581C23.874 14.9424 24 14.3147 24 13.7124C24.0018 13.0738 23.8703 12.4533 23.6129 11.869V11.869Z" fill="none" stroke="#ECECEC" />
					<defs>
						<linearGradient id="paint0_linear" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
							<stop stopColor="#FFB0B0" />
							<stop offset="1" stopColor="#FF4343" />
						</linearGradient>
					</defs>
				</svg>
			);

		case 'user':
			return (
				<svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" fill="#9B9B9B" />
				</svg>
			);

		default:
			return null;
	}
};

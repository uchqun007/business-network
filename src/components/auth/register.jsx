import {
	Button,
	Checkbox,
	Flex,
	Text,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Image,
	useToast,
	position,
	Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPas, setSHowPas] = useState(true);
	const toast = useToast();
	const router = useRouter();

	const postData = () => {
		if (
			!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			)
		) {
			toast({
				title: 'Please enter your email address correctly',
				status: 'error',
				duration: 3000,
				position: 'top-right',
				isClosable: true,
			});
			return;
		}
		fetch('http://localhost:5000/signup', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					toast({ title: data.error, status: 'error', duration: 3000, position: 'top-right', isClosable: true });
				} else {
					toast({ title: 'success', status: 'success', duration: 3000, position: 'top-right', isClosable: true });
					router.push('/login');
				}
			});
	};

	return (
		<section className='px-20 h-[600px]'>
			<div className='h-full'>
				<div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
					<div className='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
						<img
							src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
							className='w-full'
							alt='Sample image'
						/>
					</div>

					{/* <!-- Right column container --> */}
					<div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
						<div>
							{/* <!--Sign in section--> */}
							<div className='flex flex-row items-center justify-center lg:justify-start'>
								<p className='mb-0 mr-4 text-lg'>SignUp</p>
							</div>

							{/* <!-- Separator between social media sign in and email/password sign in --> */}
							<div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'></div>

							{/* <!-- Name input --> */}
							<div className='relative mb-6' data-te-input-wrapper-init>
								<input
									type='text'
									value={name}
									onChange={e => setName(e.target.value)}
									className='peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
									id='exampleFormControlInput1'
									placeholder='Name'
								/>
								<label
									htmlFor='exampleFormControlInput2'
									className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
								>
									Name
								</label>
							</div>

							{/* <!-- Email input --> */}
							<div className='relative mb-6' data-te-input-wrapper-init>
								<input
									type='text'
									value={email}
									onChange={e => setEmail(e.target.value)}
									className='peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
									id='exampleFormControlInput2'
									placeholder='Email address'
								/>
								<label
									htmlFor='exampleFormControlInput2'
									className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
								>
									Email address
								</label>
							</div>

							{/* <!-- Password input --> */}
							<div className='relative mb-6' data-te-input-wrapper-init>
								<input
									type={showPas ? 'password' : 'text'}
									value={password}
									onChange={e => setPassword(e.target.value)}
									className='peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
									id='exampleFormControlInput22'
									placeholder='Password'
								/>
								<label
									htmlFor='exampleFormControlInput22'
									className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
								>
									Password
								</label>
								<div className='absolute right-3 top-4 cursor-pointer'>
									{showPas ? (
										<FaEye fontSize={'20px'} onClick={() => setSHowPas(prev => !prev)} />
									) : (
										<FaEyeSlash fontSize={'20px'} onClick={() => setSHowPas(prev => !prev)} />
									)}
								</div>
							</div>

							{/* <!-- Login button --> */}
							<div className='text-center lg:text-left'>
								<button
									type='button'
									className='inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
									data-te-ripple-init
									data-te-ripple-color='light'
									onClick={() => postData()}
								>
									Register
								</button>
							</div>
							<Text display={'felx'} alignItems={'center'} pt={10}>
								<span className='text-gray-500'>Already registered/ </span>
								<Link href={'/login'} textColor={'gray.100'}>
									SignIn
								</Link>
							</Text>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

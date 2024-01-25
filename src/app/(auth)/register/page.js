'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [supportLevel, setSupportLevel] = useState(null);
    const [reportPhoto, setReportPhoto] = useState(null);
    const [facePhoto, setFacePhoto] = useState(null);

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            supportLevel,
            reportPhoto,
            facePhoto,
            setErrors,
        })
    }

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <div>
                <Label htmlFor="name">Name</Label>

                <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block mt-1 w-full"
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.name} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
                <Label htmlFor="email">Email</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-1 w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
                <Label htmlFor="password">Password</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-1 w-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Label htmlFor="passwordConfirmation">
                    Confirm Password
                </Label>

                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-1 w-full"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <InputError
                    messages={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            {/* Support Level */}
            <div className="mt-4">
                <Label htmlFor="supportLevel">
                    Nivel de suporte
                </Label>

                <ul className="mt-1 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input
                                id="horizontal-list-radio-one"
                                type="radio" value={1}
                                name="list-radio"
                                onChange={event =>
                                    setSupportLevel(event.target.value)
                                }
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="horizontal-list-radio-one" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">1</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input
                                id="horizontal-list-radio-two"
                                type="radio" value={1}
                                name="list-radio"
                                onChange={event =>
                                    setSupportLevel(event.target.value)
                                }
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="horizontal-list-radio-two" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">2</label>
                        </div>
                    </li>

                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center ps-3">
                            <input
                                id="horizontal-list-radio-three"
                                type="radio" value={1}
                                name="list-radio"
                                onChange={event =>
                                    setSupportLevel(event.target.value)
                                }
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="horizontal-list-radio-three" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">3</label>
                        </div>
                    </li>
                </ul>


                <InputError
                    messages={errors.support_level}
                    className="mt-2"
                />
            </div>


            {/* Report Photo */}
            <div className="mt-4">
                <Label htmlFor="report-photo">
                    Foto do laudo
                </Label>

                <div className="flex items-center justify-center w-full mt-1">
                    <label htmlFor="report-photo" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique ou arraste para fazer o upload</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, JPEG (MAX. 800x400px)</p>
                        </div>
                        <input id="report-photo" type="file" className="hidden" onChange={(event) => setReportPhoto(event.target.files[0])} />
                    </label>
                </div>

                <InputError
                    messages={errors.report_photo}
                    className="mt-2"
                />

            </div>

            {/* Face Photo */}
            <div className="mt-4">
                <Label htmlFor="face-photo">
                    Foto do rosto
                </Label>

                <div className="flex items-center justify-center w-full mt-1">
                    <label htmlFor="face-photo" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique ou arraste para fazer o upload</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, JPEG (MAX. 800x400px)</p>
                        </div>
                        <input id="face-photo" type="file" className="hidden" onChange={(event) => setFacePhoto(event.target.files[0])} />
                    </label>
                </div>

                <InputError
                    messages={errors.face_photo}
                    className="mt-2"
                />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/login"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>

                <Button className="ml-4">Register</Button>
            </div>
        </form>
    )
}

export default Page

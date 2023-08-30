import { isAxiosError } from 'axios';
import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import useModal from '../../../hooks/useModal';
import { axiosPrivate } from '../../../libs/axios';
import { FormHandler, InputType } from '../../../types/custom';
import Button from '../../Buttons/Button';
import Input from '../../Inputs/Input';
import { MaterialTextArea } from '../../Inputs/MaterialInput';
import ModalBox from '../../ModalViews/ModalBox';

type ChannelStateType = {
    channel: {
        name: string | null;
        username: string | null;
        description: string | null;
    };
    error: string | null
    loading: boolean;
}

const CreateChannelModal = () => {
    const { dispatch: modalDispatch } = useModal();
    const [channelState, setChannelState] = useState<ChannelStateType>({
        channel: { name: null, username: null, description: null },
        loading: false,
        error: null
    });

    const onClose = () => modalDispatch({ type: "UPDATE_CHANNEL_CREATE_MODAL", payload: false })

    const handleInput = (e: InputType | React.ChangeEvent<HTMLTextAreaElement>) => {
        setChannelState(prev => ({
            ...prev,
            channel: {
                ...prev.channel,
                [e.target.name]: e.target.value
            }
        }));
    }

    const handleFile = async (e: InputType) => {
        console.log(e.target.files);
    };

    const onSubmit: FormHandler = async (e) => {
        e.preventDefault();

        setChannelState(prev => ({
            ...prev,
            loading: true
        }))

        try {
            const { name, description } = channelState.channel
            const res = await axiosPrivate.post(
                `/channels/new`,
                {
                    channel_name: name,
                    channel_about: description
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            const resData = res?.data;
            modalDispatch({ type: "ADD_CHANNEL_DATA", payload: resData });
            onClose();

            console.log(resData);
        } catch (error) {
            console.error(error);
            if (isAxiosError(error)) {
                const message = error.response?.data?.message;

                setChannelState(prev => ({
                    ...prev,
                    error: message
                }))
            }

            setChannelState(prev => ({
                ...prev,
                error: "Something Went Wrong!"
            }))
        } finally {
            setChannelState(prev => ({
                ...prev,
                loading: false
            }))
        }
    }

    return <ModalBox onClose={onClose}
        classes="h-fit w-104 m-auto relative"
        overlyBg="bg-black/20"
    >
        <div className="bg-white pt-14 pb-24 rounded-xl flex flex-col items-center">
            <FaCircleUser className="w-32 h-32 fill-indigo-500" />
            <div className='my-7 grid place-content-center'>
                <label htmlFor='uploadVid'>
                    <h1 className='font-medium text-indigo-600 text-lg cursor-pointer'>
                        Upload picture
                    </h1>

                    <input
                        type='file'
                        name=''
                        id='uploadVid'
                        className='hidden'
                        onChange={handleFile}
                        accept='image/*'
                    />
                </label>
            </div>

            <form onSubmit={onSubmit} className='flex flex-col gap-3'>
                <Input
                    name='name'
                    handler={handleInput}
                    value={channelState.channel.name}
                    hint='Name'
                    showLabel
                    isRequired
                />
                <Input
                    name='username'
                    handler={handleInput}
                    value={channelState.channel.username}
                    hint='Username'
                    showLabel
                // isRequired
                />

                <MaterialTextArea
                    title='Description'
                    name='description'
                    hint='Channel Description'
                    handler={handleInput}
                    value={channelState.channel.description}
                    isRequired
                />

                <div className="absolute bottom-2 right-2 p-2">
                    <Button
                        onClick={onClose}
                        title='Cancel'
                        transparent
                    />
                    <Button
                        type='submit'
                        title='Create Channel'
                        isLoading={channelState.loading}
                    />
                </div>
            </form>
        </div>
    </ModalBox>
}

export default CreateChannelModal;
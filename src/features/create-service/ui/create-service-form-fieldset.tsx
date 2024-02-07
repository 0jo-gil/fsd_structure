import { CategorySelect } from '@/entities/category';
import { ServicesLogoPicker, ServicesUseRadio } from '@/entities/services';
import { Input } from '@/shared/ui/inputs';
import { TextArea } from '@/shared/ui/textareas';
import { Controller, useFormContext } from 'react-hook-form';
import {z} from 'zod';


export interface CreateServiceFormFieldsetData {
    name_KR: string;
    name_EN: string;
    categoryId: string;
    desc_KR: string;
    desc_EN: string;
    company_KR: string;
    company_EN: string;
    useYN: string;
    logoImg: string[];
    iosUrl: string;
    aosUrl: string;
    webUrl: string;
}


export const createServiceFormFieldsetSchema = z.object({
    name_KR: z.string(),
    name_EN: z.string(),
    categoryId: z.string(),
    desc_KR: z.string(),
    desc_EN: z.string(),
    company_KR: z.string(),
    company_EN: z.string(),
    useYN: z.string(),
    logoImg: z.array(z.string()),
    iosUrl: z.string(),
    aosUrl: z.string(),
    webUrl: z.string(),
})

export const CreateServiceFormFieldset = () => {
    const {register, control, setValue} = useFormContext<{
        name_KR: string;
        name_EN: string;
        categoryId: string;
        desc_KR: string;
        desc_EN: string;
        useYN: string;
        iosUrl: string;
        aosUrl: string;
        webUrl: string;
        logoImg: string;
    }>();
    
    return (
        <div>
            <Input label='서비스 명(KR)' {...register('name_KR')} />
            <Input label='서비스 명(EN)' {...register('name_EN')} />

            <Controller
                name='categoryId'
                control={control}
                render={({field: {value, onChange}}) => (
                    <CategorySelect 
                        label='태그'
                        categories={
                            [
                                {id: '1', label: '카테고리1'},
                                {id: '2', label: '카테고리2'},
                            ]
                        }
                        value={value || '선택'}
                        onChange={onChange}
                    />
                )}
            />

            <TextArea label='서비스 소개(KR)' {...register('desc_KR')} />
            <TextArea label='서비스 소개(EN)' {...register('desc_EN')} />

            <Controller
                name="useYN"
                control={control}
                render={({field: {value, onChange}}) => (
                    <ServicesUseRadio
                        label="사용여부"
                        useYNList={[
                            {id: 'Y', label: '사용'},
                            {id: 'N', label: '미사용'},
                        ]}
                        value={value}
                        onChange={onChange}  
                    />
                )}
            />

            <ServicesLogoPicker
                name="logoImg"
                setValue={setValue}
            />

            <Input label="IOS" {...register("iosUrl")}/>
            <Input label="AOS" {...register("aosUrl")}/>
            <Input label="WEB" {...register("webUrl")}/>
        </div>
    )
}
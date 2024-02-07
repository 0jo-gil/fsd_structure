import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3";


const useAwsS3 = () => {
    const s3 = new S3Client({
        region: import.meta.env.VITE_AWS_REGION,
        credentials: {
            accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID!,
            secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY!
        }
    })

    const fileUpload = async (item: File, service: string, fileName: string) => {
        const {type} = item;

        const uploadParams = {
            Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
            Key: `${service}/${fileName}`,
            Body: item,
            ContentType: type,
        }


        try {
            await s3.send(new PutObjectCommand(uploadParams));
            return `https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${service}/${fileName}`;
        } catch (err) {
            throw new Error('파일 업로드에 실패했습니다.');
        }
    }

    const onFileChangeHandler = async (files: File[], service: string) => {
        const id = crypto.randomUUID();
        const arr: string[] = [];

        if(!files) return;

        for (let i = 0; i < files.length; i++) {
            const result = await fileUpload(files[i], service, id);
            arr.push(result)
        }

        return arr
    }

    return {onFileChangeHandler};
}
export default useAwsS3;

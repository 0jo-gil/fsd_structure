import { InputHTMLAttributes, useState } from "react";
import { FileInputButton, FileCard, ExtFile } from "@files-ui/react";
import useAwsS3 from "@/shared/lib/bucket/hooks/useAwsS3";
import { CSSProperties } from "styled-components";
import { UseFormSetValue } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    $btnStyle?: CSSProperties;
    $cardStyle?: CSSProperties;
    setValue: UseFormSetValue<any>;
    name: string;
}

export const File = ((
    {
        label,
        $btnStyle,
        $cardStyle,
        name,
        setValue,
        ...props
    }: InputProps,
) => {
    const [files, setFiles] = useState<ExtFile[]>([]);
    const {onFileChangeHandler} = useAwsS3();

    const getExtFileFromFiles = (files: ExtFile[]): (File | undefined)[] => {
        return files?.map((file) => file.file) || [];
    }

    const updateFiles = async (incommingFiles: ExtFile[]) => {
        setFiles(incommingFiles);

        const imgResult = await onFileChangeHandler(getExtFileFromFiles(incommingFiles) as File[], 'services')
        setValue(name, imgResult);
    }

    const removeFile = (id: number | string | undefined) => {
        setFiles(files.filter((x) => x.id !== id));
    }

    const handleFinishUpload=(uploadedFiles:ExtFile[])=>{
        console.log("Upload has finished", uploadedFiles);
    }

    return (
        <div>
            {label && <label>{label}</label>}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    gap: "10px",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >
                <FileInputButton
                    onChange={updateFiles}
                    value={files}
                    accept={"image/*"}
                    maxFileSize={28 * 1024 * 1024}
                    maxFiles={2}
                    // actionButtons={{
                    //     position: "after",
                    //     uploadButton: {},
                    //     abortButton: {},
                    // }}
                    uploadConfig={{
                        // 업로드
                        cleanOnUpload: true,
                    }}
                    onUploadFinish={handleFinishUpload}
                    fakeUpload
                />
                {files.length > 0 && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent:"center",
                            flexWrap:"wrap",
                            gap:"5px",
                            minWidth:"50%"
                        }}
                    >
                        {files.map((file: ExtFile) => (
                            <FileCard key={file.id} {...file} onDelete={removeFile} info preview/>
                        ))}
                    </div>
                )}
            </div>
        </div>
   );
}) 
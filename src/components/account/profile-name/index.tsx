"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import AccountInfo from "../AccountInfo";
import { authClient, IUser } from "auth-client";
import useUserStore from "@/context/useUserStore";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { getNameSchema } from "@/lib/zod";
import { useRouter } from "next/navigation";

// Name validation schema
const profileFormSchema = z.object({
    username: getNameSchema().optional(),
});

const ProfileName = ({ currentUser }: { currentUser: IUser }) => {
    const [successState, setSuccessState] = useState(false);
    const [errorState, setErrorState] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    // Access the setCurrentUser function from the store
    const setCurrentUser = useUserStore((state) => state.setCurrentUser);

    // Determine if changes exist
    const hasChanges = name.trim() !== currentUser?.name;

    useEffect(() => {
        if (currentUser?.name) {
            setName(currentUser.name);
        }
    }, [currentUser]);

    const validateName = (name: string) => {
        try {
            profileFormSchema.parse({ username: name });
            return null; // Valid name
        } catch (error) {
            if (error instanceof z.ZodError) {
                return error.errors[0]?.message; // Return validation error message
            }
            return "An unexpected error occurred.";
        }
    };

    const updateCustomerName = async () => {
        setLoading(true);
        setErrorState(null);
        try {
            // Validate name before making API request
            const validationError = validateName(name);
            if (validationError) {
                setErrorState(validationError);
                return;
            }

            await authClient.updateUser({ name });
            setCurrentUser({ ...currentUser, name });
            setSuccessState(true);
            router.refresh();
            toast({ description: `Name saved successfully` });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Error updating name:", error);
            setErrorState(error.toString());
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (hasChanges) {
            updateCustomerName();
        }
    };

    const clearState = () => {
        setSuccessState(false);
        setErrorState(null);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full overflow-visible">
            <AccountInfo
                label="Name"
                currentInfo={currentUser?.name || ""}
                isSuccess={successState}
                isError={!!errorState}
                clearState={clearState}
                data-testid="account-name-editor"
                isLoading={loading}
            >
                <Input
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    data-testid="name-input"
                />
                {errorState && (
                    <p className="text-red-500 mt-2">{errorState}</p>
                )}
            </AccountInfo>
        </form>
    );
};

export default ProfileName;

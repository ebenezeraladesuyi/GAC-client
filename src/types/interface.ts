
export interface iAudio {
    _id : string;
    title: string;
    // image: File | null;
    audio?: File | null;
    author: string;
    audioUrl? : string;
}

export interface iMember {
    name: string;
    phoneNumber: string;
    email: string;
    why: string;
}

export interface iContact {
    reason: string;
    name: string;
    email: string;
    message: string;
}
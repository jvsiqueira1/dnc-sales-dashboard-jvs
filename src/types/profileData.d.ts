export interface ProfileEditableData {
  name: string
  phone: string
}

export interface ProfileData extends ProfileEdittableData {
  email: string
}

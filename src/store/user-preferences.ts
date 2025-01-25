import { create } from 'zustand/react'

type UserPreferences = {
	currency: 'USD' | 'JPY'
}

export const useUserPreferencesStore = create<UserPreferences>((set) => {
	return {
		currency: 'USD',
		setCurrency: (currency: UserPreferences['currency']) => set({ currency }),
	}
})

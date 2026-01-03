import AdvancedIco from '@/assets/images/icon-advanced.svg?url'
import ArcadeIco from '@/assets/images/icon-arcade.svg?url'
import ProIco from '@/assets/images/icon-pro.svg?url'

export const STEPS = [
  { id: 1, label: 'Your Info' },
  { id: 2, label: 'Select Plan' },
  { id: 3, label: 'Add-ons' },
  { id: 4, label: 'Select Plan' },
]

export const PLANS = [
  {
    id: 1,
    icon: ArcadeIco,
    title: 'Arcade',
    month: '$9/mo',
    year: '$90/yr',
  },
  {
    id: 2,
    icon: AdvancedIco,
    title: 'Advanced',
    month: '$12/mo',
    year: '$120/yr',
  },
  {
    id: 3,
    icon: ProIco,
    title: 'Pro',
    month: '$15/mo',
    year: '$150/yr',
  },
]

export const ADDONS = [
  {
    id: 'online',
    title: 'Online service',
    description: 'Access to multiplayer games',
    month: '+$1/mo',
    year: '+$10/yr',
  },
  {
    id: 'storage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    month: '+$2/mo',
    year: '+$20/yr',
  },
  {
    id: 'custom',
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    month: '+$2/mo',
    year: '+$20/yr',
  },
]

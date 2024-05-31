import AvatarSection from '@/components/avatar-section';
import LocationSection from '@/components/location-section';
import RoleSection from '@/components/role-section';

export default function ProfileSection() {
  return (
    <div className='profile grid grid-cols-[160px_auto] xl:grid-cols-[192px_auto] grid-rows-2 gap-x-4 gap-y-3 xl:gap-x-5'>
      {/* TODO: Move all grid to css where is others grids in one place grids.css */}
      <AvatarSection />

      <RoleSection />

      <LocationSection />
    </div>
  );
}

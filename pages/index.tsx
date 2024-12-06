import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { TEXTS } from '@/constants';
export default function Home() {
  return (
    <div>
      <h1 className="text-center">ALX LISTING APP</h1>
      <Card
        title="Beautiful Apartment"
        description="A cozy apartment in downtown area."
      />
      <div>
        <Button
          text={TEXTS.bookNow}
          onClick={() => console.log('Booked!')}
          variant="primary"
        />
        <Button
          text={TEXTS.details}
          onClick={() => console.log('Show details')}
          variant="secondary"
        />
      </div>
    </div>
  );
}

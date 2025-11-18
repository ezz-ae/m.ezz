
import { NotebookViewer } from '@/components/notebooks/notebook-viewer';
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';

export default function LibraryPage() {
  return (
    <div className="bg-[#f5f5f5] text-[#111] min-h-screen">
      <main className="mx-auto max-w-7xl">
        <NotebookViewer notebooks={NOTEBOOKS} />
      </main>
    </div>
  );
}

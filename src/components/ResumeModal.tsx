import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <div className="bg-navy-light rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-3 border-b border-slate/20">
                <h2 className="text-lg font-semibold text-teal">
                  Raj Kumar Sah — Resume
                </h2>

                <div className="flex gap-2">
                  <a
                    href="/raj-kumar-sah-resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-teal text-teal hover:bg-teal/10"
                    >
                      Download
                    </Button>
                  </a>

                  <Button
                    variant="ghost"
                    onClick={onClose}
                    className="text-slate hover:text-red-400"
                  >
                    ✕
                  </Button>
                </div>
              </div>

              {/* PDF Preview */}
              <iframe
                src="/raj-kumar-sah-resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
